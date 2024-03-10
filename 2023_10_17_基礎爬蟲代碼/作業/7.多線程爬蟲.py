"""
网址:https://talent.baidu.com/jobs/social-list?search=python

需求:通过多线程队列的方式采集,标题,工作地址,岗位需求,将数据保存在mysql里
"""
#
# import time
# import requests
# import pymysql
# import hashlib
# import redis
# import threading
# from queue import Queue
#
#
# class BaiduWork:
#     def __init__(self):
#         self.db = pymysql.connect(host='localhost', user='root', password='root', db='py_spider')
#         self.cursor = self.db.cursor()
#         self.redis_client = redis.Redis()
#         self.api_url = 'https://talent.baidu.com/httservice/getPostListNew'
#         self.headers = {
#             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
#                           'Chrome/119.0.0.0 Safari/537.36',
#             'Cookie': 'BAIDUID=6CD59DC7C9B42B73C17048401980628F:FG=1; BAIDUID_BFESS=6CD59DC7C9B42B73C17048401980628F:'
#                       'FG=1; BDUSS=3BYWnFiZXpQQXdKZmtHZm9TLU4wZGs4YnR5NGZyUXBlWEs2bHVDWGZ1cGVpRTFsSVFBQUFBJCQAAAAAAAA'
#                       'AAAEAAACeRULE57PR5rvD0akAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
#                       'AAAAF77JWVe-yVlQ; BDUSS_BFESS=3BYWnFiZXpQQXdKZmtHZm9TLU4wZGs4YnR5NGZyUXBlWEs2bHVDWGZ1cGVpRTFsS'
#                       'VFBQUFBJCQAAAAAAAAAAAEAAACeRULE57PR5rvD0akAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
#                       'AAAAAAAAAAAAAAAAAAAAAAF77JWVe-yVlQ; BIDUPSID=6CD59DC7C9B42B73C17048401980628F; PSTM=1698934496'
#                       '; ZFY=qPfiWnhIzf:B7QOx8zFOKSNSOCmeA2HmLejLMp:BynUOI:C; Hm_lvt_50e85ccdd6c1e538eb1290bc92327926'
#                       '=1700881955; H_PS_PSSID=39643_39668_39690_39676_39713_39739_39780_39791_39785_39703_39682_3966'
#                       '2_39678_39817_39664_39838; H_WISE_SIDS=110085_265881_275732_259642_256739_278414_281190_281810'
#                       '_281895_280650_275098_282193_282435_282571_282626_282848_253022_282938_282402_283169_281995_28'
#                       '3354_283222_251972_283364_283497_283631_281704_281052_283723_282887_256223_279613_283873_28386'
#                       '7_283782_283898_203518_283924_283922_283960_283887_284024_283976_278388_284101_283944_276768_2'
#                       '84197_273242_284280_284286_284263_281182_283357_276311_276929_284470_281864_267074_284578_2846'
#                       '90_269893_280722_284565_283872_284784_282605_284852_284793_284886_284878_284889_284845_283799_'
#                       '284809_285062_282684_285140_285220_285288; H_WISE_SIDS_BFESS=110085_265881_275732_259642_25673'
#                       '9_278414_281190_281810_281895_280650_275098_282193_282435_282571_282626_282848_253022_282938_2'
#                       '82402_283169_281995_283354_283222_251972_283364_283497_283631_281704_281052_283723_282887_2562'
#                       '23_279613_283873_283867_283782_283898_203518_283924_283922_283960_283887_284024_283976_278388_'
#                       '284101_283944_276768_284197_273242_284280_284286_284263_281182_283357_276311_276929_284470_281'
#                       '864_267074_284578_284690_269893_280722_284565_283872_284784_282605_284852_284793_284886_284878'
#                       '_284889_284845_283799_284809_285062_282684_285140_285220_285288; Hm_lpvt_50e85ccdd6c1e538eb129'
#                       '0bc92327926=1701344914; RT="z=1&dm=baidu.com&si=604bf125-f705-40aa-ba3e-a050ed16bb2c&ss=lpl4ty'
#                       'vb&sl=2&tt=47d&bcn=https%3A%2F%2Ffclog.baidu.com%2Flog%2Fweirwood%3Ftype%3Dperf&ld=6c4m"',
#             'Referer': 'https://talent.baidu.com/jobs/social-list?search=python'
#         }
#         # 创建队列
#         # 用來存返回的 api_url 的 JSON 數據
#         self.json_queue = Queue()
#         # 再將 JSON 中提取好的數據放入佇列
#         self.content_dict_queue = Queue()
#
#     def __del__(self):
#         self.cursor.close()
#         self.db.close()
#
#     # 獲取數據
#     def get_api_json(self):
#         for page in range(1, 11):
#             post_date = {
#                 'recruitType': 'SOCIAL',
#                 'pageSize': '10',
#                 'keyWord': 'python',
#                 'curPage': page,
#                 'projectType': ''
#             }
#             response = requests.post(self.api_url, headers=self.headers, data=post_date)
#             self.json_queue.put(response.json())
#
#     # 數據清洗
#     def parse_work_info(self):
#         while True:
#             json_data = self.json_queue.get()
#             category_work = json_data['data']['list']
#             for work in category_work:
#                 item = dict()
#                 item['name'] = work['name'] if work['name'] else '空'
#                 item['workPlace'] = work['workPlace'] if work['workPlace'] else '空'
#                 item['serviceCondition'] = work['serviceCondition'] if work['serviceCondition'] else '空'
#                 self.content_dict_queue.put(item)
#             self.json_queue.task_done()
#
#     # 數據去重
#     @staticmethod
#     def get_md5(item):
#         md5_hash = hashlib.md5(str(item).encode('utf-8')).hexdigest()
#         return md5_hash
#
#     # 創建表
#     def create_table(self):
#         sql = """
#             create table if not exists baidu_work(
#                 id int primary key auto_increment,
#                 name varchar(100),
#                 workPlace varchar(100),
#                 serviceCondition text
#             );
#         """
#         try:
#             self.cursor.execute(sql)
#             print('表創建成功...')
#         except Exception as e:
#             print('表創建失敗:', e)
#
#     # 存儲數據
#     def save_work_info(self):
#         while True:
#             item = self.content_dict_queue.get()
#             value = self.get_md5(item)
#             result = self.redis_client.sadd('work:filter', value)
#             # baidu_work 要統一不然會顯示不存在
#             if result:
#                 sql = """
#                     insert into baidu_work(id, name, workPlace, serviceCondition) value (
#                         %s, %s, %s, %s
#                     )
#                 """
#                 try:
#                     self.cursor.execute(sql, (0, item['name'], item['workPlace'], item['serviceCondition']))
#                     self.db.commit()
#                     print('數據保存成功...')
#                 except Exception as e:
#                     print('數據保存失敗:', e)
#                     self.db.rollback()
#             else:
#                 print('數據重複...')
#             self.content_dict_queue.task_done()
#
#     # 啟動
#     def main(self):
#         self.create_table()
#         thread_obj_list = list()
#
#         t_get_work_info = threading.Thread(target=self.get_api_json)
#         thread_obj_list.append(t_get_work_info)
#
#         t_parse_work_info = threading.Thread(target=self.parse_work_info)
#         thread_obj_list.append(t_parse_work_info)
#
#         t_save_work_info = threading.Thread(target=self.save_work_info)
#         thread_obj_list.append(t_save_work_info)
#
#         for t_obj in thread_obj_list:
#             t_obj.daemon = True
#             t_obj.start()
#
#         time.sleep(3)
#
#         for q in [self.json_queue, self.content_dict_queue]:
#             q.join()
#
#         print('主程序結束...')
#
#
# if __name__ == '__main__':
#     bdw = BaiduWork()
#     bdw.main()

"""
网址:https://talent.baidu.com/jobs/social-list?search=python

需求:通过多线程队列的方式采集,标题,工作地址,岗位需求,将数据保存在mysql里
"""

import time
import requests
import pymysql
import hashlib
import redis
import threading
from queue import Queue


class BaiduWork:
    def __init__(self):
        self.db = pymysql.connect(host='localhost', user='root', password='root', db='py_spider')
        self.cursor = self.db.cursor()
        self.redis_client = redis.Redis()
        self.api_url = 'https://talent.baidu.com/httservice/getPostListNew'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                          'Chrome/119.0.0.0 Safari/537.36',
            'Cookie': 'BAIDUID=6CD59DC7C9B42B73C17048401980628F:FG=1; BAIDUID_BFESS=6CD59DC7C9B42B73C17048401980628F:'
                      'FG=1; BDUSS=3BYWnFiZXpQQXdKZmtHZm9TLU4wZGs4YnR5NGZyUXBlWEs2bHVDWGZ1cGVpRTFsSVFBQUFBJCQAAAAAAAA'
                      'AAAEAAACeRULE57PR5rvD0akAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
                      'AAAAF77JWVe-yVlQ; BDUSS_BFESS=3BYWnFiZXpQQXdKZmtHZm9TLU4wZGs4YnR5NGZyUXBlWEs2bHVDWGZ1cGVpRTFsS'
                      'VFBQUFBJCQAAAAAAAAAAAEAAACeRULE57PR5rvD0akAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
                      'AAAAAAAAAAAAAAAAAAAAAAF77JWVe-yVlQ; BIDUPSID=6CD59DC7C9B42B73C17048401980628F; PSTM=1698934496'
                      '; ZFY=qPfiWnhIzf:B7QOx8zFOKSNSOCmeA2HmLejLMp:BynUOI:C; Hm_lvt_50e85ccdd6c1e538eb1290bc92327926'
                      '=1700881955; H_PS_PSSID=39643_39668_39690_39676_39713_39739_39780_39791_39785_39703_39682_3966'
                      '2_39678_39817_39664_39838; H_WISE_SIDS=110085_265881_275732_259642_256739_278414_281190_281810'
                      '_281895_280650_275098_282193_282435_282571_282626_282848_253022_282938_282402_283169_281995_28'
                      '3354_283222_251972_283364_283497_283631_281704_281052_283723_282887_256223_279613_283873_28386'
                      '7_283782_283898_203518_283924_283922_283960_283887_284024_283976_278388_284101_283944_276768_2'
                      '84197_273242_284280_284286_284263_281182_283357_276311_276929_284470_281864_267074_284578_2846'
                      '90_269893_280722_284565_283872_284784_282605_284852_284793_284886_284878_284889_284845_283799_'
                      '284809_285062_282684_285140_285220_285288; H_WISE_SIDS_BFESS=110085_265881_275732_259642_25673'
                      '9_278414_281190_281810_281895_280650_275098_282193_282435_282571_282626_282848_253022_282938_2'
                      '82402_283169_281995_283354_283222_251972_283364_283497_283631_281704_281052_283723_282887_2562'
                      '23_279613_283873_283867_283782_283898_203518_283924_283922_283960_283887_284024_283976_278388_'
                      '284101_283944_276768_284197_273242_284280_284286_284263_281182_283357_276311_276929_284470_281'
                      '864_267074_284578_284690_269893_280722_284565_283872_284784_282605_284852_284793_284886_284878'
                      '_284889_284845_283799_284809_285062_282684_285140_285220_285288; Hm_lpvt_50e85ccdd6c1e538eb129'
                      '0bc92327926=1701344914; RT="z=1&dm=baidu.com&si=604bf125-f705-40aa-ba3e-a050ed16bb2c&ss=lpl4ty'
                      'vb&sl=2&tt=47d&bcn=https%3A%2F%2Ffclog.baidu.com%2Flog%2Fweirwood%3Ftype%3Dperf&ld=6c4m"',
            'Referer': 'https://talent.baidu.com/jobs/social-list?search=python'
        }
        # 创建队列
        # 用來存返回的 api_url 的 post 數據
        self.post_data_queue = Queue()
        # 再將 JSON 中提取好的數據放入佇列
        self.content_dict_queue = Queue()

    def __del__(self):
        self.cursor.close()
        self.db.close()

    # 獲取數據
    def get_post(self):
        for page in range(1, 11):
            post_date = {
                'recruitType': 'SOCIAL',
                'pageSize': '10',
                'keyWord': 'python',
                'curPage': page,
                'projectType': ''
            }
            self.post_data_queue.put(post_date)

    # 數據清洗
    def parse_work_info(self):
        while True:
            post_data = self.post_data_queue.get()
            response = requests.post(self.api_url, headers=self.headers, data=post_data).json()
            # category_work = response['data']['list']
            for work in response['data']['list']:
                item = dict()
                item['name'] = work['name'] if work['name'] else '空'
                item['workPlace'] = work['workPlace'] if work['workPlace'] else '空'
                item['serviceCondition'] = work['serviceCondition'] if work['serviceCondition'] else '空'
                self.content_dict_queue.put(item)
            self.post_data_queue.task_done()

    # 數據去重
    @staticmethod
    def get_md5(item):
        md5_hash = hashlib.md5(str(item).encode('utf-8')).hexdigest()
        return md5_hash

    # 創建表
    def create_table(self):
        sql = """
            create table if not exists baidu_work(
                id int primary key auto_increment,
                name varchar(100),
                workPlace varchar(100),
                serviceCondition text
            );
        """
        try:
            self.cursor.execute(sql)
            print('表創建成功...')
        except Exception as e:
            print('表創建失敗:', e)

    # 存儲數據
    def save_work_info(self):
        while True:
            item = self.content_dict_queue.get()
            value = self.get_md5(item)
            result = self.redis_client.sadd('work:filter', value)
            # baidu_work 要統一不然會顯示不存在
            if result:
                sql = """
                    insert into baidu_work(id, name, workPlace, serviceCondition) value (
                        %s, %s, %s, %s
                    )
                """
                try:
                    self.cursor.execute(sql, (0, item['name'], item['workPlace'], item['serviceCondition']))
                    self.db.commit()
                    print('數據保存成功...')
                except Exception as e:
                    print('數據保存失敗:', e)
                    self.db.rollback()
            else:
                print('數據重複...')
            self.content_dict_queue.task_done()

    # 啟動
    def main(self):
        self.create_table()
        thread_obj_list = list()

        t_get_post_info = threading.Thread(target=self.get_post)
        thread_obj_list.append(t_get_post_info)

        for _ in range(3):
            t_parse_work_info = threading.Thread(target=self.parse_work_info)
            thread_obj_list.append(t_parse_work_info)

        t_save_work_info = threading.Thread(target=self.save_work_info)
        thread_obj_list.append(t_save_work_info)

        for t_obj in thread_obj_list:
            t_obj.daemon = True
            t_obj.start()
            time.sleep(0.2)

        for q in [self.post_data_queue, self.content_dict_queue]:
            q.join()

        print('主程序結束...')


if __name__ == '__main__':
    bdw = BaiduWork()
    bdw.main()

