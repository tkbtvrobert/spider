import hashlib
import time
import redis
import pymongo
import requests
from multiprocessing import Process, JoinableQueue as Queue


class MgMovieInfo:
    # 在多进程中, 对于数据库初始化操作必须设置为类属性
    mongo_client = pymongo.MongoClient(host='localhost', port=27017, username='admin', password='root')
    collection = mongo_client['py_spider']['mg_movie_process']
    redis_client = redis.Redis()

    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                          'Chrome/119.0.0.0 Safari/537.36'
        }
        self.api_url = 'https://pianku.api.mgtv.com/rider/list/pcweb/v4'

        self.params_queue = Queue()
        self.json_queue = Queue()
        self.content_queue = Queue()

    # 构造查询字符串数据
    def get_params(self):
        for page in range(1, 3):
            params = {
                "_support": "10000000",
                "abroad": "1",
                "allowedRC": "1",
                "channelId": "2",
                "hudong": "0",
                "kind": "19",
                "pc": "80",
                "platform": "pcweb",
                "pn": page,
                "sort": "c2",
                "src": "intelmgtv"
            }
            self.params_queue.put(params)

    # 发送请求
    def get_movie_info(self):
        while True:
            params = self.params_queue.get()
            response = requests.get(self.api_url, headers=self.headers, params=params).json()
            self.json_queue.put(response)
            self.params_queue.task_done()

    # 数据清洗
    def parse_info(self):
        while True:
            response = self.json_queue.get()
            movie_list = response['data']['hitDocs']
            for movie in movie_list:
                item = dict()
                item['title'] = movie['title']
                item['subtitle'] = movie['subtitle']
                item['story'] = movie['story']
                self.content_queue.put(item)
            self.json_queue.task_done()

    # 获取对应字典的md5的值
    @staticmethod
    def get_md5(value):
        md5_hash = hashlib.md5(str(value).encode('utf-8')).hexdigest()
        return md5_hash

    # 保存數據
    def save_movie_info(self):
        while True:
            item = self.content_queue.get()
            value = self.get_md5(item)
            result = self.redis_client.sadd('movie:filter', value)
            if result:
                self.collection.insert_one(item)
                print('保存成功:', item)
            else:
                print('數據重複...')
            self.content_queue.task_done()

    def main(self):
        # 创建一个进程对象列表
        process_obj_list = list()

        # 创建一个进程对象用于构造查询字符串并将对象添加到进程列表中
        p_params = Process(target=self.get_params)
        process_obj_list.append(p_params)

        # 创建五个进程对象用于发送请求并添加到进程对象列表中
        for _ in range(5):
            p_get_movie = Process(target=self.get_movie_info)
            process_obj_list.append(p_get_movie)

        # 创建一个进程对象用于数据清洗并添加到进程对象列表中
        p_parse_info = Process(target=self.parse_info)
        process_obj_list.append(p_parse_info)

        # 创建一个进程对象用户数据保存并添加到进程对象列表中
        p_save = Process(target=self.save_movie_info)
        process_obj_list.append(p_save)

        for p in process_obj_list:
            p.daemon = True
            p.start()

            # 进程启动需要消耗大量时间，故加個延遲
            # 寫在 for 循環裡面，等待時間不用太長，故不寫3秒
            time.sleep(0.3)

        for q in [self.params_queue, self.json_queue, self.content_queue]:
            q.join()

        print('主進程結束...')


if __name__ == '__main__':
    movie_info = MgMovieInfo()
    movie_info.main()
