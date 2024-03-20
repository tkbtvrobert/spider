import requests
import execjs

js = execjs.compile(open('01-33幀.js', encoding='utf-8').read())

headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6,vi;q=0.5",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Origin": "https://fse.agilestudio.cn",
    "Pragma": "no-cache",
    "Referer": "https://fse.agilestudio.cn/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "X-Signature": "71e663d55cd106f9428b348b350c0706",
    "sec-ch-ua": "Not_A",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "Windows"
}
url = "https://fse-api.agilestudio.cn/api/search"
# request  传参数   url 不会进行编码     params 传参会进行编码
params = {
    "keyword": "火车呼啸而过",
    "page": "2",
    "limit": "12",
    "_platform": "web",
    "_versioin": "0.2.5",
    "_ts": "1706074532298"
}
Signature = js.call('d', params)
print(Signature)
headers['X-Signature'] = Signature['sign']
params['_ts'] = Signature['time']
response = requests.get(url, headers=headers, params=params)
# 请求不成功 注意複製過來的碼，中文和一些資訊會進行編碼，記得改回來
print(response.text)
print(response)