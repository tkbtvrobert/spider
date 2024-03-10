# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
import pymysql
from itemadapter import ItemAdapter


class MySQLPipeline:
    def __init__(self):
        self.db = None
        self.cursor = None

    def open_spider(self, spider):
        # 判断当前的爬虫名是否为当前的spider
        if spider.name == 'book':
            self.db = pymysql.connect(host='localhost', user='root', password='root', db='py_spider')
            self.cursor = self.db.cursor()

            # 创建表
            sql = """
                create table if not exists book_info(
                    id int primary key auto_increment,
                    title varchar(255) not null,
                    price varchar(255) not null,
                    author varchar(255) not null,
                    date_data varchar(255) not null,
                    detail text,
                    producer varchar(255) not null
                );
            """

            try:
                self.cursor.execute(sql)
                print('表創建成功...')
            except Exception as e:
                print('表創建失敗:', e)

    def process_item(self, item, spider):
        if spider.name == 'book':
            # 数据保存语句
            sql = """
                insert into book_info values (
                    %s, %s, %s, %s, %s, %s, %s
                );
            """

            try:
                self.cursor.execute(sql, (
                    0, item['title'], item['price'], item['author'], item['date_data'], item['detail'],
                    item['producer']
                ))
                self.db.commit()
                print('數據插入成功:', item)
            except Exception as e:
                print('數據插入失敗:', e)
                self.db.rollback()
            # 将数据提交给redis管道
            return item

    def close_spider(self, spider):
        # 关闭数据库连接
        if spider.name == 'book':
            self.cursor.close()
            self.db.close()