# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import pymongo


class NetEasePipeline:
    def __init__(self):
        self.mongo_client = None
        self.collection = None

    def open_spider(self, spider):
        self.mongo_client = pymongo.MongoClient()
        self.collection = self.mongo_client['py_spider']['netEase_job']

    def process_item(self, item, spider):
        self.collection.insert_one(item)
        print('保存成功:', item)

    def close_spider(self, spider):
        self.mongo_client.close()