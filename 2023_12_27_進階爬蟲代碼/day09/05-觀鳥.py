import requests
import execjs
import pymongo
import json


class GuanNiao:
    def __init__(self):
        self.url = 'https://api.birdreport.cn/front/activity/search'
        self.headers = {
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "Accept-Language": "zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6,vi;q=0.5",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Origin": "http://birdreport.cn",
            "Pragma": "no-cache",
            "Referer": "http://birdreport.cn/",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "cross-site",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "requestId": "5ee5362e5d48054fd05a0f6554fb3ba4",
            "sec-ch-ua": "^\\^Not_A",
            "sec-ch-ua-mobile": "?0",
            # "sec-ch-ua-platform": "^\\^Windows^^",
            # "sign": "421944dbdc40c0839fc53f8e22a9dc1e",
            # "timestamp": "1705899000000"
        }
        self.data = "page={}&limit=20"
        self.js = execjs.compile(open('04-觀鳥.js', encoding='utf-8').read())
        self.con = pymongo.MongoClient(host='localhost', port=27017, username='admin', password='root')
        self.db = self.con['spiders13']['guanniao']

    def get_data(self, page):
        he = self.js.call('get_headers', self.data.format(page))
        self.headers['Timestamp'] = str(he['timestamp'])
        self.headers['Sign'] = he['sign']
        self.headers['Requestid'] = he['requestId']
        # print(self.headers)
        response = requests.post(self.url, headers=self.headers, data=he['data'])
        # print(response.text)
        return response.json()

    def parse_data(self, data):
        res = self.js.call('decode', data['data'])
        # print(res)
        # res為json數據，故用了json.loads()，使其能夠在 Python 中進行進一步的操作和處理
        for i in json.loads(res):
            item = {}
            item['address'] = i['address']
            item['point_name'] = i['point_name']
            item['timeend'] = i['timeend']
            item['username'] = i['username']
            self.save_data(item)

    def save_data(self, item):
        # print(item)
        self.db.insert_one(item)

    def main(self):
        for page in range(1, 10):
            data = self.get_data(page)
            self.parse_data(data)


if __name__ == '__main__':
    gn = GuanNiao()
    gn.main()
