import execjs
import requests
import re

headers = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
}
url = "https://www.dhl.com/cn-zh/home/tracking/tracking-ecommerce.html"
params = {
    "submit": "1",
    "tracking-id": "1232343"
}
response = requests.get(url, headers=headers, params=params)

js_url = 'https://www.dhl.com' + re.findall('/noscript><script type="text/javascript"  src="(.*?)"></sc', response.text)[0]
cookies = {
    '_abck': response.cookies.get('_abck'),
    'bm_sz': response.cookies.get('bm_sz'),
    'ak_bmsc': response.cookies.get('ak_bmsc')
}

headers = {
    "referer": "https://www.dhl.com/cn-zh/home/tracking/tracking-ecommerce.html?submit=1&tracking-id=1232343",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
}
res = requests.get(js_url, headers=headers, cookies=cookies)
dd = execjs.compile(open('01-阿卡迈.js', encoding='utf-8').read()).call('U1T', cookies['bm_sz'], res.cookies.get('_abck'), url)
# print(dd)
cookies['_abck'] = res.cookies.get('_abck')
data = {'sensor_data':dd}
headers1 = {
    "origin": "https://www.dhl.com",
    "referer": "https://www.dhl.com/cn-zh/home/tracking/tracking-ecommerce.html?submit=1&tracking-id=1232343",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
}
print(data)
res1 = requests.post(js_url, headers=headers1, cookies=cookies, json=data)
print(res1.cookies)
print(res1.text)

