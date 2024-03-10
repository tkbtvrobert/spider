"""
1.当前网站中的数据可以在html页面中找到
    是一个静态数据

2.网站中的数据类型是不是json数据类型？
    数据在html中, 所以不是json数据类型

网站在搭建完成之后是需要维护更新的
    FM中的数据是动态数据
    原来的api接口数据还是可以照常使用的
"""

import requests

# 大家在浏览器中可能无法获取这个api了
url = 'https://webapi.qingting.fm/api/mobile/rank/hotSaleWeekly'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 '
                  'Safari/537.36'
}

r = requests.get(url, headers=headers)
print(r.json())