# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
import os
import pymongo
from itemadapter import ItemAdapter


class DoubanPipeline:
    def __init__(self):
        self.mongo_client = None
        self.collection = None

    def open_spider(self, spider):
        if spider.name == "top250":
            self.mongo_client = pymongo.MongoClient(host='localhost', port=27017, username='admin', password='root')
            self.collection = self.mongo_client['py_spider']['doubanTop250']

    def process_item(self, item, spider):
        if spider.name == "top250":
            type_ = item.get('type')
            if type_ == 'info':
                self.collection.insert_one(item)
                print('插入成功:', item.get('title'))
            elif type_ == 'image':
                download_path = os.getcwd() + '/download/'
                if not os.path.exists(download_path):
                    os.mkdir(download_path)

                image_name = item.get('image_name')
                image_content = item.get('image_content')
                with open(download_path + image_name, 'wb') as f:
                    f.write(image_content)
                    print('下载成功:', image_name)
            else:
                print('类型不符合规定...')

    def close_spider(self, spider):
        if spider.name == "top250":
            self.mongo_client.close()

