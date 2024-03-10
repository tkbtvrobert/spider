import time
import pymysql
import requests
import retrying
from lxml import etree
from queue import Queue
from loguru import logger
from feapder.network.user_agent import get

"""
retrying 為最大重試次數，如果三次請求失敗，會拋出異常
loguru 為日誌包
feapder 在下載當前框架時一定要確保當前環境是新的虛擬環境，為 UA 池，會和其他框架衝突
"""


class AmazonShop:
    def __init__(self):
        self.db = pymysql.connect(host='localhost', user='root', password='root', db='py_spider')
        self.cursor = self.db.cursor()
        self.amazon_api = 'https://www.amazon.com/nav/ajax/hamburgerMainContent?ajaxTemplate=hamburgerMainContent&' \
                          'pageType=Gateway&hmDataAjaxHint=1&navDeviceType=desktop&isSmile=0&isPrime=0&isBackup=fa' \
                          'lse&hashCustomerAndSessionId=79c5f75ed58d91313dc2ab0ee4014b046e938efa&languageCode=zh_T' \
                          'W&environmentVFI=AmazonNavigationCards%2Fdevelopment-nov13patch%40B6166161938-AL2_x86_6' \
                          '4&secondLayerTreeName=prm_digital_music_hawkfire%2Bkindle%2Bandroid_appstore%2Belectron' \
                          'ics_exports%2Bcomputers_exports%2Bsbd_alexa_smart_home%2Barts_and_crafts_exports%2Bauto' \
                          'motive_exports%2Bbaby_exports%2Bbeauty_and_personal_care_exports%2Bwomens_fashion_expor' \
                          'ts%2Bmens_fashion_exports%2Bgirls_fashion_exports%2Bboys_fashion_exports%2Bhealth_and_h' \
                          'ousehold_exports%2Bhome_and_kitchen_exports%2Bindustrial_and_scientific_exports%2Blugga' \
                          'ge_exports%2Bmovies_and_television_exports%2Bpet_supplies_exports%2Bsoftware_exports%2B' \
                          'sports_and_outdoors_exports%2Btools_home_improvement_exports%2Btoys_games_exports%2Bvid' \
                          'eo_games_exports%2Bgiftcards%2Bamazon_live%2BAmazon_Global&customerCountryCode=TW'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                          'Chrome/119.0.0.0 Safari/537.36',
            'Referer': 'https://www.amazon.com/',
            "X-Requested-With": "XMLHttpRequest",
            "downlink": "10",
            "ect": "4g",
            "rtt": "200"
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

    def main(self):
        self.create_table()


if __name__ == '__main__':
    pass
