import json
import requests
from lxml import etree

url = 'https://www.4399.com/flash/'

response = requests.get(url).content.decode('gbk')
# print(response)

tree = etree.HTML(response)

a_list = tree.xpath("//ul[@class='b-game cf']/li/a")

# 仿照JSON格式外面列表，內部字典
game_list = list()

for a in a_list:
    item = dict()
    item['href'] = a.xpath("./@href")[0]
    item['title'] = a.xpath("./text()")[0]
    game_list.append(item)

with open('game_info.json', 'w', encoding='utf-8') as f:
    # f.write(json.dumps(game_list))
    # indent 為數據縮進, ensure_ascii 為是否禁止ascii碼
    f.write(json.dumps(game_list, indent=4, ensure_ascii=False))
