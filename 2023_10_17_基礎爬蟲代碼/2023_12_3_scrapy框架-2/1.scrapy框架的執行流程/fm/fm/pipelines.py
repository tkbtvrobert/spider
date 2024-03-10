# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import os
import pymongo


class FmPipeline:
    def process_item(self, item, spider):
        # print('pipeline中的數據:', item)
        # mongo_client = pymongo.MongoClient(host='localhost', port=27017, username='admin', password='root')
        # collection = mongo_client['py_spider']['gingtingFM']
        # collection.insert_one(item)
        # print('數據插入成功:', item)

        # download_path = os.getcwd() + '/download/'
        # print(download_path)
        # if not os.path.exists(download_path):
        #     os.mkdir(download_path)
        #
        # image_name = item.get('image_name')
        # image_content = item.get('image_content')
        # if image_name:
        #     with open(download_path + image_name, 'wb') as f:
        #         f.write(image_content)
        #         print('保存成功:', image_name)

        # 获取yield返回的数据的类型
        type_ = item.get('type')

        if type_ == 'image':
            download_path = os.getcwd() + '/download/'
            if not os.path.exists(download_path):
                os.mkdir(download_path)

            image_name = item.get('image_name')
            image_content = item.get('image_content')
            with open(download_path + image_name, 'wb') as f:
                f.write(image_content)
                print('下載成功:', image_name)
        elif type_ == 'info':
            mongo_client = pymongo.MongoClient(host='localhost', port=27017, username='admin', password='root')
            collection = mongo_client['py_spider']['gingtingFM']
            collection.insert_one(item)
            print('插入成功:', item.get('title'))
        else:
            print('數據類型不符合規定...')
