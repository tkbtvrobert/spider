import threading
import time
import pymysql
import requests
import retrying
from lxml import etree
from queue import Queue
from loguru import logger
from feapder.network.user_agent import get
import hashlib
import redis

"""
retrying 為最大重試次數，如果三次請求失敗，會拋出異常
loguru 為日誌包
feapder 在下載當前框架時一定要確保當前環境是新的虛擬環境，為 UA 池，會和其他框架衝突

思路:
商品列表頁面
構造二級頁面地址+node
當前這個二級菜單的列表頁+最大頁數提出來翻頁
再進一步的提取當前某一個商品的詳情頁

請求要發送三次
首頁中的api地址
根據node訪問二級菜單對應的商品列表，提取單獨的商品詳情頁
發送詳情頁地址，並獲取數據
"""


class AmazonShop:
    def __init__(self):
        self.db = pymysql.connect(host='localhost', user='root', password='root', db='py_spider')
        self.cursor = self.db.cursor()
        self.redis_client = redis.Redis()
        self.amazon_api = 'https://www.amazon.com/nav/ajax/hamburgerMainContent?ajaxTemplate=hamburgerMainContent&pageType=Gateway&hmDataAjaxHint=1&navDeviceType=desktop&isSmile=0&isPrime=0&isBackup=false&hashCustomerAndSessionId=79c5f75ed58d91313dc2ab0ee4014b046e938efa&languageCode=zh_TW&environmentVFI=AmazonNavigationCards%2Fdevelopment%40B6183676708-AL2_x86_64&secondLayerTreeName=prm_digital_music_hawkfire%2Bkindle%2Bandroid_appstore%2Belectronics_exports%2Bcomputers_exports%2Bsbd_alexa_smart_home%2Barts_and_crafts_exports%2Bautomotive_exports%2Bbaby_exports%2Bbeauty_and_personal_care_exports%2Bwomens_fashion_exports%2Bmens_fashion_exports%2Bgirls_fashion_exports%2Bboys_fashion_exports%2Bhealth_and_household_exports%2Bhome_and_kitchen_exports%2Bindustrial_and_scientific_exports%2Bluggage_exports%2Bmovies_and_television_exports%2Bpet_supplies_exports%2Bsoftware_exports%2Bsports_and_outdoors_exports%2Btools_home_improvement_exports%2Btoys_games_exports%2Bvideo_games_exports%2Bgiftcards%2Bamazon_live%2BAmazon_Global&customerCountryCode=TW'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                          'Chrome/119.0.0.0 Safari/537.36',
            'Referer': 'https://www.amazon.com/',
            "X-Requested-With": "XMLHttpRequest",
            "downlink": "1.35",
            "ect": "3g",
            "rtt": "250"
        }

        # 付费代理api地址, 需要替换自己购买的代理地址
        # self.ip_url = ''

        """
        创建队列对象
        """
        # self.ip_queue = Queue()

        # 商品分类地址队列
        self.classify_url_queue = Queue()
        # 商品详情地址队列
        self.detail_url_queue = Queue()
        # 商品数据队列
        self.shop_info_queue = Queue()

    def __del__(self):
        self.cursor.close()
        self.db.close()

    """数据表创建"""

    def create_table(self):
        sql = """
            create table if not exists amazon_shop(
                id int primary key auto_increment,
                price varchar(255) not null ,
                title varchar(255) not null ,
                goods_url varchar(255) not null 
            );
        """
        try:
            self.cursor.execute(sql)
            print('商品表創建成功...')
        except Exception as e:
            print('商品表創建失敗:', e)

    """访问分类api并返回api中的分类数据"""
    # 賦予三次訪問機會
    @retrying.retry(stop_max_attempt_number=3)
    def get_shop_data(self, url):
        self.headers['User-Agent'] = get()
        response = requests.get(url, headers=self.headers)
        return response

    """在api数据中提取一级分类标题一级商品列表中的node参数"""
    def get_classify_info(self):
        try:
            response = self.get_shop_data(self.amazon_api).json()['data']
            # print(response)
            tree = etree.HTML(response)
            li_list = tree.xpath('//ul/li[position() > 2]')
            for li in li_list:
                item = dict()
                if li.xpath('./a/text()'):
                    if '全部' in li.xpath('./a/text()')[0]:
                        continue
                    if 'http' in li.xpath('./a/@href')[0]:
                        continue
                    item['title'] = li.xpath('./a/text()')[0]
                    item['href'] = li.xpath('./a/@href')[0].split('=')[1].split('&')[0]
                    # print(item)
                    self.classify_url_queue.put(item)
        except Exception as e:
            print('請求失敗:', e)
            logger.error('請求失敗的連結:', self.amazon_api)

    """根据node参数构造商品列表页并提取商品列表也中的详情页地址"""
    def get_detail_url(self):
        while True:
            info_url = self.classify_url_queue.get()
            try:
                response = self.get_shop_data('https://www.amazon.cn/s?rh=n%3A' + info_url['href'] + '&fs=true').text
            except Exception as e:
                print('訪問失敗:', e)
                logger.error('商品列表頁訪問失敗:', 'https://www.amazon.cn/s?rh=n%3A' + info_url['href'] + '&fs=true')
                continue

            tree = etree.HTML(response)
            if tree.xpath('//span[@class="s-pagination-strip"]/span[last()]/text()'):
                max_page = tree.xpath('//span[@class="s-pagination-strip"]/span[last()]/text()')[0]
                # 根据在商品列表页中提取的最大页数进行翻页
                for page in range(1, int(max_page)+1):
                    new_page = 'https://www.amazon.cn/s?rh=n%3A' + info_url['href'] + '&fs=true&page=' + str(page)
                    try:
                        response = self.get_shop_data(new_page)
                    except Exception as e:
                        print('訪問失敗:', e)
                        logger.error('商品列表頁訪問失敗:', new_page)
                        continue

                    tree = etree.HTML(response.text)
                    # 获取所有指定商品的详情地址
                    detail_href_list = tree.xpath('//div[@class="sg-col-inner"]/span/div[1]/div/div/div//h2/a/@href')
                    for detail_href in detail_href_list:
                        item = dict()
                        item['detail_href'] = detail_href
                        # print('成立:', item)
                        self.detail_url_queue.put(item)
            else:
                page = 'https://www.amazon.cn/s?rh=n%3A' + info_url['href'] + '&fs=true'
                response = self.get_shop_data(page)
                tree = etree.HTML(response.text)
                # 获取所有指定商品的详情地址
                detail_href_list = tree.xpath('//div[@class="sg-col-inner"]/span/div[1]/div/div/div//h2/a/@href')
                for detail_href in detail_href_list:
                    item = dict()
                    item['detail_href'] = detail_href
                    # print('不成立:', item)
                    self.detail_url_queue.put(item)

            self.classify_url_queue.task_done()

    """访问商品详情页并完成数据提取"""
    def parse_shop_info(self):
        while True:
            detail_url_dict = self.detail_url_queue.get()
            detail_url = 'https://www.amazon.cn/' + detail_url_dict['detail_href']

            try:
                response = self.get_shop_data(detail_url)
            except Exception as e:
                print('訪問失敗:', e)
                logger.error('詳情頁訪問失敗:', detail_url)
                continue

            tree = etree.HTML(response.text)

            # 商品标题，三元運算
            title = tree.xpath('//div[@id="centerCol"]//h1/span/text()')[0] if tree.xpath(
                '//div[@id="centerCol"]//h1/span/text()') else tree.xpath('//title/text()')[0]

            # 商品价格
            if tree.xpath('//div[@id="centerCol"]//div[@id="apex_desktop"]//span[@class="a-price-whole"]/text()'):
                price = "￥" + tree.xpath(
                    '//div[@id="centerCol"]//div[@id="apex_desktop"]//span[@class="a-price-whole"]/text()')[0]
            else:
                price = '-'.join(tree.xpath(
                    '//td[@class="a-span12"]//span[@class="a-offscreen"]/text()'))

            print(title.strip(), price)
            # 将解析到的商品数据打包成一个元组提交到队列中
            # strip() 刪除空格
            self.shop_info_queue.put((title.strip(), price, detail_url))
            self.detail_url_queue.task_done()

    @staticmethod
    def get_md5(item):
        md5_hash = hashlib.md5(str(item).encode('utf-8')).hexdigest()
        return md5_hash

    """商品数据保存"""
    def save_shop_info(self):
        while True:
            # 定义列表用于数据的批量存储
            info_list = list()

            # 在队列中连续取到30条数据并添加到info列表中
            for _ in range(30):
                info = self.shop_info_queue.get()
                info_list.append((0,) + info)
                self.shop_info_queue.task_done()

            sql = """
                insert into amazon_shop(id, title, price, goods_url) value (
                    %s, %s, %s, %s
                );
            
            """

            try:
                # 批量保存, executemany接收的是一个迭代对象
                self.cursor.executemany(sql, info_list)
                self.db.commit()
                print('數據插入成功:', info_list)
            except Exception as e:
                print('數據插入失敗:', e)
                logger.error('數據庫保存失敗', e)
                self.db.rollback()

    """启动函数"""
    def main(self):
        self.create_table()

        # 创建线程对象列表
        thread_list = list()

        # 分类线程
        thread_list.append(threading.Thread(target=self.get_classify_info))

        # 商品详情
        for _ in range(10):
            thread_list.append(threading.Thread(target=self.get_detail_url))

        # 数据解析
        for _ in range(2):
            thread_list.append(threading.Thread(target=self.parse_shop_info))

        # 数据保存 一定要确保只有一个子线程在完成这个功能，盡量主線程完成
        thread_list.append(threading.Thread(target=self.save_shop_info))

        for thread_obj in thread_list:
            thread_obj.daemon = True
            thread_obj.start()

        # 延迟等待子线程对象启动
        time.sleep(4)

        for queue in [self.classify_url_queue, self.detail_url_queue, self.shop_info_queue]:
            queue.join()


# 輸入 main 就能夠自動補全了
if __name__ == '__main__':
    # 日志记录:文件过大于500M就会重新生成一个文件
    # logger.add('runtime_{time}.log', rotation='500 MB')
    amazon_shop = AmazonShop()
    amazon_shop.main()


"""
多線程適合多個函數，單一功能
線程池適合單個函數，多種功能
"""