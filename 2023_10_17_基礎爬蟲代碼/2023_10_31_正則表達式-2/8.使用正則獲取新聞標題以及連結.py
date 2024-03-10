import requests
import re

url = 'https://m.36kr.com'

# 模拟手机浏览器访问移动端页面
headers = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) '
                  'Chrome/119.0.0.0 Mobile Safari/537.36'
}

response = requests.get(url, headers=headers).text
# print(response)

# href="([^"]*): 去除页面中链接的双引号
item_list = re.findall(r'<a class="item-info clearfloat" href="([^"]*).*?ellipsis-2">(.*?)</span>.*?</a>', response)
# item_list = re.findall(r'href="([^"]*).*?<span.*?>(.*?)</span>', response)
# print(item_list)

for temp in item_list:
    print(url + temp[0], temp[1])
