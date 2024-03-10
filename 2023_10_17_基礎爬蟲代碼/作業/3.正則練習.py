"""
目标网址：https://www.77xsw.cc/fenlei/1_1/

获取到当前网页上更新列表里的所有小说名字和小说的地址(10页)
"""

import requests
import re

url = 'https://www.77xsw.cc/fenlei/1_{}/'

headers = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) '
                  'Chrome/119.0.0.0 Mobile Safari/537.36'
}

for page in range(1, 4):
    response = requests.get(url.format(page), headers=headers).text
    item_list = re.findall(r'<span class="sp_2">.*?href="([^"]*).*?>(.*?)</a>', response)
    for temp in item_list:
        print(temp[0], temp[1])

    # 返回元組列表
    # for item in re.findall(r'<span class="sp_2">.*?href="([^"]*).*?>(.*?)</a>', response, re.DOTALL):
    #     print(item)

# response = requests.get(url, headers=headers).text
# item_list = re.findall(r'<span class="sp_2">.*?href="([^"]*).*?>(.*?)</a>', response)
#
# for temp in item_list:
#     print(temp[0], temp[1])
