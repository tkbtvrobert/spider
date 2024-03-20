import requests
import execjs

headers = {
    "authority": "www.kanzhun.com",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded;charset=utf-8",
    "href": "https://www.kanzhun.com/search?pageNum=1&query=^%^E7^%^88^%^AC^%^E8^%^99^%^AB&type=5",
    "pragma": "no-cache",
    "referer": "https://www.kanzhun.com/search?pageNum=1&query=^%^E7^%^88^%^AC^%^E8^%^99^%^AB&type=5",
    "reqsource": "fe",
    "sec-ch-ua": "^\\^Not_A",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "traceid": "29541bd9-bfcd-458a-ac27-35b7d95ad794",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "x-requested-with": "XMLHttpRequest"
}
cookies = {
    "__c": "1705596010",
    "wd_guid": "abdd92a2-d8e2-405e-a430-b0d32b8133ed",
    "__g": "-",
    "historyState": "state",
    "__l": "r=&l=^%^2Fapi_to^%^2Fhome^%^2Frec.json^%^3Fb^%^3DuUvbZbRvmKBf1FUBf6J6ew~~^%^26kiv^%^3DPLaBQXpu6aedFPgd",
    "__a": "30108040.1705596010..1705596010.4.1.4.4"
}
js = execjs.compile(open('02-demo.js', encoding='utf-8').read())
data = '{"query":"爬虫","pageNum":1,"limit":15}'
dar = js.call('get_data', data)
print(dar)
url = "https://www.kanzhun.com/api_to/search/job.json"
params = {
    "b": dar['b'],
    "kiv": dar['kiv']
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

res = js.call('c', response.text, dar['kiv'])
print(res)

print(len(response.text))
print(response)

# 蜜罐技术    给了不正确的数据
# 如果沒加上b只有kiv的話，會是錯誤資訊
