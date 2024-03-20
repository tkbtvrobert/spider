import requests
import execjs
import base64


class DSJ:
    def __init__(self):
        self.url = 'https://www.spolicy.com/info_api/policyType/showPolicyType'
        self.headers = {
            'Content-Type': 'application/octet-stream',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                          'Chrome/120.0.0.0 Safari/537.36'
        }
        self.data = {
            "policyType": "2",
            "province": "",
            "city": "",
            "downtown": "",
            "garden": "",
            "centralId": "",
            "sort": 0,
            "homePageFlag": 1,
            "pageNum": 1,
            "pageSize": 7
        }
        self.js = execjs.compile(open('07-大數據產業平台.js', 'r',encoding='utf-8').read())

    def get_data(self):
        data1 = self.js.call('PolicyInfoByTypeIdParam$encode', self.data)
        date1_base64 = base64.b64decode(data1)
        # print(data1)
        # print(base64.b64decode(data1))
        # 數據流application/octet-stream這個的關係，傳過去必須是bytes
        # res = requests.post(url=self.url, headers=self.headers, data=bytes(data1['data']))
        res = requests.post(url=self.url, headers=self.headers, data=date1_base64)
        print(res.text)

    def main(self):
        self.get_data()


if __name__ == '__main__':
    dsj = DSJ()
    dsj.main()