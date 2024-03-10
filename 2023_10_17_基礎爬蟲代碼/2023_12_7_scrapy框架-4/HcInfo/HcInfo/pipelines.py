# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html
import pymongo
# useful for handling different item types with a single interface
from itemadapter import ItemAdapter


class HcInfoPipeline:
    def process_item(self, item, spider):
        return item


class MongoPipeline:
    def __init__(self):
        self.mongo_client = None
        self.collection = None

    def open_spider(self, spider):
        if spider.name == 'HcInfoData':
            self.mongo_client = pymongo.MongoClient(host='localhost', port=27017, username='admin', password='root')
            self.collection = self.mongo_client['py_spider']['scrapy_jc_info']

    def process_item(self, item, spider):
        if spider.name == 'HcInfoData':
            # 使用items文件校验后传递过来的item不是dict对象
            self.collection.insert_one(dict(item))
            print('數據插入成功:', item)
            return item

    def close_spider(self, spider):
        if spider.name == 'HcInfoData':
            self.mongo_client.close()
