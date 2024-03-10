# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter

import pymongo


class FmPipeline:
    def process_item(self, item, spider):
        # print('pipeline中的數據:', item)
        mongo_client = pymongo.MongoClient(host='localhost', port=27017, username='admin', password='root')
        collection = mongo_client['py_spider']['gingtingFM']
        collection.insert_one(item)
        print('數據插入成功:', item)
