import pymongo
import requests


class AiQiYi:
    def __init__(self):
        self.mongo_client = pymongo.MongoClient(host='localhost', port=27017, username='admin', password='root')
        self.collection = self.mongo_client['py_spider']['AiQiYi']

        # list後面跟著就是查詢字符串參數
        # self.api_url = 'https://pcw-api.iqiyi.com/search/recommend/list?channel_id=2&data_type=1&mode=11&page_id=1' \
        #                '&ret_num=48&session=ae1d9805125e07baad340006b1ce20f4&three_category_id=15;must'
        self.api_url = 'https://pcw-api.iqiyi.com/search/recommend/list'

        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                          'Chrome/119.0.0.0 Safari/537.36',
            'Referer': 'https://list.iqiyi.com/www/2/15-------------11-1-1-iqiyi--.html?s_source=PCW_SC'
        }

    # 获取数据
    def get_movie_info(self, params):
        # response = requests.get(self.api_url, headers=self.headers).json()
        # return response
        response = requests.get(self.api_url, headers=self.headers, params=params).json()
        # yield是在for循環中使用
        return response

    # 数据解析
    def parse_movie_info(self, response):
        category_movies = response['data']['list']
        for movie in category_movies:
            item = dict()
            item['title'] = movie['title']
            item['playUrl'] = movie['playUrl']
            item['description'] = movie['description']

            # 有沒有數據保存?
            self.save_movie_info(item)
            print('保存成功:', item)

    # 数据保存
    def save_movie_info(self, item):
        self.collection.insert_one(item)

    # 启动方法
    def main(self):
        for page in range(1, 6):
            params = {
                'channel_id': '2',
                'data_type': '1',
                'mode': '11',
                'page_id': page,
                'ret_num': '48',
                'session': 'ae1d9805125e07baad340006b1ce20f4',
                'three_category_id': '15;must',
            }

            response = self.get_movie_info(params)
            self.parse_movie_info(response)


if __name__ == '__main__':
    aqy = AiQiYi()
    aqy.main()