import re
import random
import requests
import execjs
import time
import json
from loguru import logger
import base64

requests = requests.session()
logger.critical('极验点选验证码协议分析')
# 拿gt  ch

headers = {
    "Accept": "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://my.xunyou.com/safety/ss/checkUsername.html",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0",
    "X-Requested-With": "XMLHttpRequest",
    "sec-ch-ua": "^\\^Not",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^"
}
params = {
    "t": str(int(time.time() * 1000)),
    # 'jsonp': 'jsoncallback',
    # "jsoncallback": "jQuery182021893438842665325_1706968283992",
    "_": str(int(time.time() * 1000))
}
resp = requests.get('https://my.xunyou.com/gt3-php-sdk-master/web/StartCaptchaServlet.php', headers=headers,
                    params=params)
gt = re.findall('"gt":"(.*?)",', resp.text)[0]
challenge = re.findall('"challenge":"(.*?)",', resp.text)[0]
print(gt, challenge)
with open('无感验证.js', encoding='utf-8') as f:
    js = execjs.compile(f.read())
w1 = js.call('get_W1', gt, challenge)
#  拿第一次c s
headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://my.xunyou.com/",
    "Sec-Fetch-Dest": "script",
    "Sec-Fetch-Mode": "no-cors",
    "Sec-Fetch-Site": "cross-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    "sec-ch-ua": "^\\^Not",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^"
}
url = "https://api.geetest.com/get.php"
params = {
    "gt": gt,
    "challenge": challenge,
    "lang": "zh-cn",
    "pt": "0",
    "client_type": "web",
    "w": w1
}
response = requests.get(url, headers=headers, params=params)
print(response.text)
ss = json.loads(response.text[1:-1])['data']['s']
cc = json.loads(response.text[1:-1])['data']['c']
w2 = js.call('get_W2', cc, ss, gt, challenge)

# 拿click
headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://www.geetest.com/",
    "Sec-Fetch-Dest": "script",
    "Sec-Fetch-Mode": "no-cors",
    "Sec-Fetch-Site": "cross-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "sec-ch-ua": "^\\^Not_A",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^"
}
params = {
    "gt": gt,
    "challenge": challenge,
    "lang": "zh-cn",
    "pt": "0",
    "client_type": "web",
    "w": w2,
    "callback": "geetest_" + str(int(time.time() * 1000))
}
url = "https://api.geevisit.com/ajax.php"
resp = requests.get(url, params=params, headers=headers)  # , proxies=proxies)
print(resp.text)
url = "https://api.geevisit.com/get.php"
headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://www.geevisit.com/",
    "Sec-Fetch-Dest": "script",
    "Sec-Fetch-Mode": "no-cors",
    "Sec-Fetch-Site": "cross-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "sec-ch-ua": "^\\^Not_A",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^"
}
params = {
    "is_next": "true",
    "type": "click",
    "gt": gt,
    "challenge": challenge,
    "lang": "zh-cn",
    "https": "false",
    "protocol": "https//",
    "offline": "false",
    "product": "embed",
    "api_server": "api.geevisit.com",
    "isPC": "true",
    "autoReset": "true",
    "width": "100%",
    "callback": "geetest_" + str(int(time.time() * 1000))
}
resp = requests.get(url, headers=headers, params=params)  # , proxies=proxies)
s = json.loads(resp.text[22:-1])['data']['s']
c = json.loads(resp.text[22:-1])['data']['c']
pic = json.loads(resp.text[22:-1])['data']['pic']
image = requests.get('https://static.geevisit.com' + pic, headers={
    "authority": "static.geetest.com",
    "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "referer": "https://my.xunyou.com/",
    "sec-ch-ua": "^\\^Not",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "sec-fetch-dest": "image",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-site": "cross-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0"
}).content
with open('img.jpg', 'wb') as f:
    f.write(image)
payload = {
    "image": base64.b64encode(image).decode(),
    'extra': "click",
    # 'direction': 'bottom',
    "token": "EEpGHUlKNuIVaY46DrnLB5_WwnD8ednoUTlAdUHSe0U",
    "type": "30009"
}
resp = requests.post("http://api.jfbym.com/api/YmServer/customApi", headers={
    'Content-Type': 'application/json'
}, data=json.dumps(payload))
zuobiao = resp.json()['data']['data']
logger.info(f'识别到坐标:{zuobiao}')
click_point_array = zuobiao.split('|')
click_point_true = []
for item in click_point_array:
    x, y = item.split(',')
    point = str(int(int(x) / 344 * 10000)) + '_' + str(int(int(y) / 344 * 10000))
    click_point_true.append(point)
click_true_str = ','.join(click_point_true)
with open('接单.js', encoding='utf-8') as f:
    js = execjs.compile(f.read())
w = js.call('get_W', click_true_str, pic, c, s, gt, challenge)
headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://www.geetest.com/",
    "Sec-Fetch-Dest": "script",
    "Sec-Fetch-Mode": "no-cors",
    "Sec-Fetch-Site": "cross-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "sec-ch-ua": "^\\^Not_A",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^"
}
url1 = "https://api.geevisit.com/ajax.php"
params = {
    "gt": gt,
    "challenge": challenge,
    "lang": "zh-cn",
    "pt": "0",
    "client_type": "web",
    "w": w,
}
time.sleep(2)
resp1 = requests.get(url1, params=params, headers=headers)  # , proxies=proxies)
print(resp1.text)

validate = json.loads(resp1.text[1:-1])['data']['validate']

url = "https://my.xunyou.com/index.php/ss/checkaccount"
a = '15143376101'
data = {
    "username": int(a),
    "ismobile": "1",
    "geetest_challenge": challenge,
    "geetest_validate": validate,
    "geetest_seccode": validate + "|jordan"
}
headers = {
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "https://my.xunyou.com",
        "Pragma": "no-cache",
        "Referer": "https://my.xunyou.com/safety/ss/checkUsername.html",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0",
        "X-Requested-With": "XMLHttpRequest",
        "sec-ch-ua": "^\\^Not",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "^\\^Windows^^"
    }
response = requests.post(url, headers=headers, data=data)
print(response.json())
if response.json()['msg'] == "\u7528\u6237\u4e0d\u5b58\u5728":
    print(f'{a}新号')
else:
    print(f'{a}老号')


