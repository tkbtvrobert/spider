"""
目标：

获取搜狐视频电影一栏里的电视剧信息，提取名称、主演，获取10个页面，将数据分别存储在mysql和MongoDB数据库,对数据进行去重,已经对请求网址实现去重

目标网址：https://so.tv.sohu.com/list_p1100_p2_p3_p4_p5_p6_p7_p8_p9_p102_p11_p12_p13_p14.html


"""

import requests
import hashlib
import redis
import pymysql
import pymongo
from lxml import etree


class TvSohu:
    def __init__(self):
        self.url = 'https://so.tv.sohu.com/list_p1100_p2_p3_p4_p5_p6_p7_p8_p9_p10{}_p11_p12_p13_p14.html'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                          'Chrome/119.0.0.0 Safari/537.36'
        }
        self.mongo_client = pymongo.MongoClient(host='localhost', port=27017, username='admin', password='root')
        self.collection = self.mongo_client['py_spider']['TvSohu']
        self.redis_client = redis.Redis()
        self.db = pymysql.connect(host='localhost', user='root', password='root', db='py_spider')
        self.cursor = self.db.cursor()

    def __del__(self):
        self.cursor.close()
        self.db.close()

    # 请求数据
    def get_movie_info(self):
        for num in range(1, 11):
            response = requests.get(self.url.format(num), headers=self.headers).text
            yield response

    # 数据清洗以及数据结构调整
    def parse_movie_data(self, response):
        for movie_info in response:
            tree = etree.HTML(movie_info)
            ul_list = tree.xpath('//ul[@class="st-list cfix"]/li')
            for ul in ul_list:
                item = dict()
                item['title'] = ul.xpath('./strong/a/text()')[0]
                item['actor'] = ul.xpath('./p/a/text()')[0] if ul.xpath('./p/a/text()') else '空'
                # self.save_movie_info_mongo(item)
                self.save_movie_info_mysql(item)

    # 数据去重
    """
    這種方式是一次性將整個數據轉換成字節串，然後計算 MD5 雜湊值。這對於小數據集而言是一種簡單且直接的方式，但如果數據量很大，可能會占用較多內存。
    """
    @staticmethod
    def get_md5(item):
        md5_hash = hashlib.md5(str(item).encode('utf-8')).hexdigest()
        return md5_hash

    def create_table(self):
        sql = """
            create table if not exists movie_info(
                id int primary key auto_increment,
                title varchar(20),
                actor varchar(20)
            );
        """
        try:
            self.cursor.execute(sql)
            print('表創建成功...')
        except Exception as e:
            print('表創建失敗:', e)

    # 数据保存
    # def save_movie_info_mongo(self, item):
    #     value = self.get_md5(item)
    #     result = self.redis_client.sadd('movie:filter', value)
    #
    #     if result:
    #         self.collection.insert_one(item)
    #         print('數據插入成功:', item)
    #     else:
    #         print('數據重複...')

    def save_movie_info_mysql(self, item):
        value = self.get_md5(item)
        result = self.redis_client.sadd('movie:filter', value)

        if result:
            sql = """
                insert into movie_info(id, title, actor) value (
                    %s, %s, %s
                )
            """
            try:
                self.cursor.execute(sql, (0, item['title'], item['actor']))
                self.db.commit()
                print('數據保存成功...')
            except Exception as e:
                print('數據保存失敗', e)
                self.db.rollback()
        else:
            print('數據重複...')

    # 启动方法
    def main(self):
        self.create_table()
        response = self.get_movie_info()
        self.parse_movie_data(response)


if __name__ == '__main__':
    tvsohu = TvSohu()
    tvsohu.main()
