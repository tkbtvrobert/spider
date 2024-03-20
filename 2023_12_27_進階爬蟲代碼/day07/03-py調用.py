# 如果遇到編碼問題，解決方式

# 第一种
# import subprocess
# from functools import partial

# subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")

# 第二种
# 进入subprocess.py文件  搜索encoding=none , 把none改成'utf-8'

import requests
import execjs

headers = {
    "Accept": "text/plain, */*; q=0.01",
    "Accept-Language": "zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://www.endata.com.cn",
    "Pragma": "no-cache",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
    "sec-ch-ua": "^\\^Not_A",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^"
}
url = "https://www.endata.com.cn/API/GetData.ashx"
data = {
    "": "",
    "MethodName": "BoxOffice_GetMonthTime"
}
response = requests.post(url, headers=headers, data=data)

js = execjs.compile(open('02-藝恩.js', encoding='utf-8').read())
res = js.call('webInstace.shell', response.text)
print(res)