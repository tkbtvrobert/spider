import execjs
import time
import requests


class HongRen:
    def __init__(self):
        self.url = 'https://ucp.hrdjyun.com:60359/api/dy'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                          'Chrome/120.0.0.0 Safari/537.36'
        }
        self.js_code = open('08-紅人.js', encoding='utf-8').read()
        self.js = execjs.compile(self.js_code)

    def get_data(self):
        for i in range(6, 8):
            aa = str(int(time.time() * 1000))
            # date = input('請輸入要的日期(2024-01-06):')
            date = '2024-01-0{}'.format(i)
            n = {"no": "dy0002","data": {"days": 1,"rankType": 5,"liveDay": date}}
            sign = self.js.call('get_sign', n, aa)
            # token 要登入帳號才能取得
            data = {"param": "{\"no\":\"dy0002\",\"data\":{\"days\":1,\"rankType\":5,\"liveDay\":\"%s\"}}" % date,
                    "sign": sign, "tenant": "1",
                    "timestamp": aa, "token": "bpp0hxdY+z7Wr/Vs1fUGAjAXOXzo9qnw"}
            res = requests.post(self.url, headers=self.headers, json=data)
            print(res.text)

    def main(self):
        self.get_data()


if __name__ == '__main__':
    hr = HongRen()
    hr.main()
