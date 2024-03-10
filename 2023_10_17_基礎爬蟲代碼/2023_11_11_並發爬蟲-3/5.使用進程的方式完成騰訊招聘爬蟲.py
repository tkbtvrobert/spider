import time
import pymongo
import requests
import jsonpath
from multiprocessing import Process, JoinableQueue as Queue

# from concurrent.futures import ProcessPoolExecutor

"""
JoinableQueue 是 Queue 的子類
進程不安全的一種佇列
佇列計數器 JoinableQueue 才有
佇列計數器可對當前佇列中通過 get 取值的次數，假如為0，那麼可以使用佇列中的join方法立即釋放主程序
"""

url = 'https://careers.tencent.com/tencentcareer/api/post/Query'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                  'Chrome/119.0.0.0 Safari/537.36'
}


def get_work_info_json(page_num, queue):
    params = {
        'timestamp': 1700803744600,
        'countryId': '',
        'cityId': '',
        'bgIds': '',
        'productId': '',
        'categoryId': '',
        'parentCategoryId': '',
        'attrId': '1',
        'keyword': 'python',
        'pageIndex': page_num,
        'pageSize': 10,
        'language': 'zh-cn',
        'area': 'tw'
    }

    response = requests.get(url, headers=headers, params=params).json()
    for info in response['Data']['Posts']:
        work_info_dict = dict()
        work_info_dict['recruit_post_name'] = jsonpath.jsonpath(info, '$..RecruitPostName')[0]
        work_info_dict['country_name'] = jsonpath.jsonpath(info, '$..CountryName')[0]
        work_info_dict['location_name'] = jsonpath.jsonpath(info, '$..LocationName')[0]
        work_info_dict['category_name'] = jsonpath.jsonpath(info, '$..CategoryName')[0]
        work_info_dict['responsibility'] = jsonpath.jsonpath(info, '$..Responsibility')[0]
        work_info_dict['last_update_time'] = jsonpath.jsonpath(info, '$..LastUpdateTime')[0]
        # print(work_info_dict)
        queue.put(work_info_dict)


def save_work_info(queue):
    mongo_client = pymongo.MongoClient(host='localhost', port=27017, username='admin', password='root')
    collection = mongo_client['py_spider']['tx_work']

    while True:
        dict_data = queue.get()
        print(dict_data)
        collection.insert_one(dict_data)

        # 将当前队列中的计数器减1, 如果队列计数器为0, 则接堵塞, 可以直接退出主程序
        queue.task_done()


if __name__ == '__main__':
    # 进程是必须要创建函数入口的
    dict_data_queue = Queue()

    # 创建进程对象列表
    process_list = list()

    for page in range(1, 51):
        p_get_info = Process(target=get_work_info_json, args=(page, dict_data_queue))
        process_list.append(p_get_info)

    p_save_work = Process(target=save_work_info, args=(dict_data_queue,))
    process_list.append(p_save_work)

    for process_obj in process_list:
        process_obj.daemon = True
        process_obj.start()

    # 开启进程需要消耗大量的时间
    time.sleep(4)

    # 如果队列中的计数器不为零则会堵塞主程序
    dict_data_queue.join()
    print('主程序退出...')
