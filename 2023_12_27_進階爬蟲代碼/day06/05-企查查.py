import requests
import execjs


class Qcc():
    def __init__(self):
        self.headers = {
            "authority": "www.qcc.com",
            "accept": "application/json, text/plain, */*",
            "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            "cache-control": "no-cache",
            "content-type": "application/json",
            # "d4a47fe8c28bcc2588cc": "883927c081293f8a15f3b90343a1d51c1f2d6e7deb3e5547b2264e4e2a48a58866db723d8095dae737b18d2fb702396d434ca5110559387b45c27aa27c4b446f",
            "origin": "https://www.qcc.com",
            "pragma": "no-cache",
            "referer": "https://www.qcc.com/web/search?key=^%^E4^%^B8^%^87^%^E8^%^BE^%^BE^%^E9^%^9B^%^86^%^E5^%^9B^%^A2&p=2",
            "sec-ch-ua": "^\\^Not_A",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "^\\^Windows^^",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
            "x-pid": "a687c2e80b67bc8c9a7e19c818f6ab0e",
            "x-requested-with": "XMLHttpRequest",
            'cookie': 'QCCSESSID=911b05584172b8f746ddb91a21; qcc_did=bca48e75-a10a-412e-ac26-d4d478b494f9; acw_tc=3daa4f3317054091095368129e666328ff98d916b68b51717a77df64ac'
        }
        self.url = 'https://www.qcc.com/api/search/searchMulti'
        self.js = execjs.compile(open('04-企查查.js', encoding='utf-8').read())

    def get_data(self):
        for i in range(1, 2):
            e = {
                "searchKey": "万达集团",
                "pageIndex": i,
                "pageSize": 20
            }
            he = self.js.call('get_data', e)
            self.headers[he['key']] = he['val']
            res = requests.post(self.url, headers=self.headers, json=e)
            print(res.json())


if __name__ == '__main__':
    qcc = Qcc()
    qcc.get_data()
