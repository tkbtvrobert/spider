import time
import pymongo
import requests
import threading
from queue import Queue


class AiQiYi:
    def __init__(self):
        self.mongo_client = pymongo.MongoClient(host='localhost', port=27017, username='admin', password='root')

        self.collection = self.mongo_client['py_spider']['Thread_AiQiYi']

        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                          'Chrome/119.0.0.0 Safari/537.36',
            'Referer': 'https://list.iqiyi.com/www/2/15-------------11-1-1-iqiyi--.html?s_source=PCW_SC'
        }

        self.api_url = 'https://pcw-api.iqiyi.com/search/recommend/list?channel_id=2&data_type=1&mode=11&page_id={}' \
                       '&ret_num=48&session=6e0d987ec455b4992c6c745b0ee04152&three_category_id=15;must'

        # 创建队列
        # 用來存放多個 api_url 網址
        self.url_queue = Queue()
        # 用來存返回的 api_url 的 JSON 數據
        self.json_queue = Queue()
        # 再將 JSON 中提取好的數據放入佇列
        self.content_dict_queue = Queue()

    def get_url(self):
        for page in range(1, 6):
            # 避免並發請求導致 ip 被封
            time.sleep(1)
            # 加一次 url
            self.url_queue.put(self.api_url.format(page))

    # 唯一對網站請求的函數
    def get_api_json(self):
        while True:
            url = self.url_queue.get()
            response = requests.get(url, headers=self.headers)
            # print(response.json())
            # 加一次 json
            self.json_queue.put(response.json())
            # 針對線程的，減一次 url
            self.url_queue.task_done()

    def parse_movie_info(self):
        while True:
            json_data = self.json_queue.get()
            category_movies = json_data['data']['list']
            for movie in category_movies:
                item = dict()
                item['title'] = movie['title']
                item['playUrl'] = movie['playUrl']
                item['description'] = movie['description']
                # 加一次提取好的數據
                self.content_dict_queue.put(item)
            # 減一次 json
            self.json_queue.task_done()

    def save_movie_info(self):
        while True:
            item = self.content_dict_queue.get()
            self.collection.insert_one(item)
            print('插入成功:', item)
            # 減一次提取好的數據
            self.content_dict_queue.task_done()

    def main(self):
        # 创建线程对象列表
        thread_obj_list = list()

        # 创建获取url的线程对象并加入到线程对象列表中
        t_url = threading.Thread(target=self.get_url)
        thread_obj_list.append(t_url)

        # 创建发送请求的多个线程对象并添加到线程列表中
        for _ in range(3):
            t_get_json = threading.Thread(target=self.get_api_json)
            thread_obj_list.append(t_get_json)

        # 创建解析数据的线程对象并添加到线程对象列表中
        t_parse_info = threading.Thread(target=self.parse_movie_info)
        thread_obj_list.append(t_parse_info)

        # 创建保存数据的线程对象并添加到线程对象列表中
        t_save_info = threading.Thread(target=self.save_movie_info)
        thread_obj_list.append(t_save_info)

        for t_obj in thread_obj_list:
            threading.Thread.daemon = True
            t_obj.start()

        # 当前所有的队列对象中的计数器为零才能解堵塞主程序
        for q in [self.url_queue, self.json_queue, self.content_dict_queue]:
            # 判斷計數器為零才釋放
            q.join()

        print('主程序結束...')


if __name__ == '__main__':
    aqy = AiQiYi()
    aqy.main()

"""
整個程序只有一個任務發送網路請求

"""