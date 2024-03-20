import requests
import json
import execjs

headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Origin": "https://kaoyan.docin.com",
    "Referer": "https://kaoyan.docin.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "cross-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "X-Application": "Pdfreader.Web",
    "X-Version": "V2.2",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
with open("08-豆丁.js", "r", encoding="utf-8") as f:
    js_code = f.read()
url = "https://ky.douding.cn//Api/Web/GetDocumentInfos"
json_data = {
    'SearchKeyword': '复试 仿真模拟',
    'PageIndex': 1,
    'PageSize': 20,
}
js_exec = execjs.compile(js_code).call("get_params", json.dumps(json_data))
print(js_exec["nonce"], js_exec["sign"], js_exec["timestamp"], sep="\n")
headers["X-Nonce"] = js_exec["nonce"]
headers["X-Sign"] = js_exec["sign"]
headers["X-Timestamp"] = str(js_exec["timestamp"])

# requests 传json 数据   调用json.dumps
response = requests.post('https://ky.douding.cn//Api/Web/GetDocumentInfos', headers=headers, json=json_data)
print(response.json())

# 如果是靠請求載荷傳，最好是用python進行轉換json.dumps()，再給js加密
# json=json_data會自動調用json.loads()
