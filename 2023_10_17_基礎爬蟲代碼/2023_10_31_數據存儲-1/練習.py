import requests
import re

url = 'https://tw.news.yahoo.com/food'

headers = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) '
                  'Chrome/119.0.0.0 Mobile Safari/537.36'
}

response = requests.get(url, headers=headers).text
# print(response)

# item_list = re.findall(r'href="([^"]*).*?<h3.*?>(.*?)</h3>', response)
# 此處重點在括號!! 要\(
item_list = re.findall(r'<a class="js-content-viewer rapidnofollow D\(b\) Mt\(-3px\) Td\(n\) Td\(n\):f "[^>]*?'
                       r'href="([^"]+)"[^>]*?>.*?<h3[^>]*?>(.*?)</h3>', response)

for temp in item_list:
    print(url + temp[0], temp[1])
