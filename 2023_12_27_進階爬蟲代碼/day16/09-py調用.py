import requests


class JianZhu:
    def __init__(self):
        self.url = 'https://jzsc.mohurd.gov.cn/APi/webApi/dataservice/query/comp/list?pg={}&pgsz=15&total=450'
        self.headers = {
            "v": "231012",
            "Referer": "https://jzsc.mohurd.gov.cn/data/company",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
        }

    def get_data(self, page):
        res = requests.get(self.url.format(page), headers=self.headers)
        return res.text

    def parse_data(self, data):
        data = {
            'group': 'jzsc',
            'action': 'bbb',
            'data': data
        }
        res = requests.post('http://127.0.0.1:5620/business-demo/invoke', data=data)
        print(res.json())
        for i in res.json()['data']['list']:
            COLLECT_TIME = i['COLLECT_TIME']
            QY_FR_NAME = i['QY_FR_NAME']
            QY_REGION_NAME = i['QY_REGION_NAME']
            print(COLLECT_TIME, QY_FR_NAME, QY_REGION_NAME)

    def main(self):
        for page in range(1, 3):
            data = self.get_data(page)
            self.parse_data(data)


if __name__ == '__main__':
    jz = JianZhu()
    jz.main()

# get請求會有長度限制，數據太長就用post
