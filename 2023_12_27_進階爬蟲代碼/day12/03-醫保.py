import requests
import execjs


class YibBao:
    def __init__(self):
        self.headers = {
            "Accept": "application/json",
            "Accept-Language": "zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6,vi;q=0.5",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Content-Type": "application/json",
            "Origin": "https://fuwu.nhsa.gov.cn",
            "Pragma": "no-cache",
            "Referer": "https://fuwu.nhsa.gov.cn/nationalHallSt/",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "X-Tingyun": "c=B^|4Nl_NnGbjwY;x=f7746dd27663426e",
            "channel": "web",
            "contentType": "application/x-www-form-urlencoded",
            "sec-ch-ua": "Not_A",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "Windows",
            "x-tif-nonce": "L3nmSZ2N",
            "x-tif-paasid": "undefined",
            "x-tif-signature": "3b3ec841ebbb8f20f99756586fed2b4f512e5cf3ca26301be669e887f544e7eb",
            "x-tif-timestamp": "1706152100"
        }
        self.url = 'https://fuwu.nhsa.gov.cn/ebus/fuwu/api/nthl/api/CommQuery/queryFixedHospital'
        self.js = execjs.compile(open('02-醫保.js', encoding='utf-8').read())
        self.data = {
            "data": {
                "addr": "",
                "regnCode": "110000",
                "medinsName": "",
                "medinsLvCode": "",
                "medinsTypeCode": "",
                "openElec": "",
                "pageNum": 2,
                "pageSize": 10,
                "queryDataSource": "es"
            },
            "appCode": "T98HPCGN5ZVVQBS8LZQNOAEXVI9GYHKQ",
            "version": "1.0.0",
            "encType": "SM4",
            "signType": "SM2",
            "timestamp": 1706176503
        }

    def get_data(self, page):
        head = self.js.call('get_headers')
        self.headers['x-tif-nonce'] = head['x-tif-nonce']
        self.headers['x-tif-paasid'] = "undefined"
        self.headers['x-tif-signature'] = head['x-tif-signature']
        self.headers['x-tif-timestamp'] = str(head['x-tif-timestamp'])
        self.headers['X-Tingyun'] = head['X-Tingyun']
        # print(self.headers)
        self.data['timestamp'] = head['x-tif-timestamp']
        self.data['data']['pageNum'] = page
        data = self.js.call('json_data', self.data)
        # print(data)
        data1 = {"data": {"data": {
            "encData": data['encData']},
                          "appCode": "T98HPCGN5ZVVQBS8LZQNOAEXVI9GYHKQ", "version": "1.0.0", "encType": "SM4",
                          "signType": "SM2", "timestamp": head['x-tif-timestamp'],
                          "signData": data['signData']}}
        # print(data1)
        response = requests.post(self.url, headers=self.headers, json=data1)
        # print(response.text)
        return response.json()

    def parse_data(self, data):
        response = self.js.call('parse_data', data)
        print(response)

    def main(self):
        for page in range(1, 3):
            data = self.get_data(page)
            self.parse_data(data)


if __name__ == '__main__':
    yb = YibBao()
    yb.main()
