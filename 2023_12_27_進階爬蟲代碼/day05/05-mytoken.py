import hashlib
import time

import requests

url = 'https://api.mytokenapi.com/ticker/currencylist?page=1&size=100&subject=market_cap&currency_project_tags=231' \
      '&language=en_US&legal_currency=USD&timestamp={}&code={}&platform=web_pc&v=0.1.0&international=1'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 '
                  'Safari/537.36'
}

t1 = str(int(time.time()*1000))
va = t1 + '9527' + t1[0:6]

md5 = hashlib.md5()
md5.update(va.encode('utf-8'))
# print(md5.hexdigest())
code = md5.hexdigest()

response = requests.get(url.format(t1, code), headers=headers)
print(response.text)