"""
网站：链家网       网址：https://sh.lianjia.com/ershoufang/pudong/pg2/

用xpath爬取链家网里的租房信息获取标题，位置，房屋的格局（三室一厅），关注人数，单价，总价
"""

import requests
from lxml import etree

url = 'https://sh.lianjia.com/ershoufang/pudong/pg2/'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 '
                  'Safari/537.36'
}

response = requests.get(url, headers=headers).text
# print(response)

tree = etree.HTML(response)

ul_list = tree.xpath('//ul[@class="sellListContent"]/li')

for item in ul_list:
    house_info = dict()
    house_info['title'] = item.xpath('.//div[@class="title"]/a/text()')[0]
    house_info['positionInfo'] = item.xpath('.//div[@class="positionInfo"]/a[1]/text()')[0] + '- ' \
                                 + item.xpath('.//div[@class="positionInfo"]/a[2]/text()')[0]
    # strip() 目的是去除字符串前後的空白字符
    # 要取[0]才可對字串切割
    house_info['houseInfo'] = item.xpath('.//div[@class="houseInfo"]/text()')[0].split('|')[0].strip()
    house_info['followInfo'] = item.xpath('.//div[@class="followInfo"]/text()')[0].split('/')[0].strip()
    house_info['unitPrice'] = item.xpath('.//div[@class="unitPrice"]/span/text()')[0]
    house_info['totalPrice'] = item.xpath('.//div[@class="totalPrice totalPrice2"]/span/text()')[0] + '万'

    print(house_info)
