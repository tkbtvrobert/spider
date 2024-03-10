import requests
from bs4 import BeautifulSoup
url = 'https://weixin.sogou.com/weixin?_sug_type_=1&type=2&query=golang'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 '
                  'Safari/537.36'
}

response = requests.get(url, headers=headers).text
# print(response)

soup = BeautifulSoup(response, 'lxml')

ul_list = soup.find_all('ul', class_='news-list')

for ul in ul_list:
    h3_list = soup.find_all('h3')
    for h3 in h3_list:
        a_tag = h3.find('a')
        title = a_tag.get_text()
        link = a_tag.get('href')
        print(title, link)

# # 1. 创建soup对象
# soup = BeautifulSoup(response, 'lxml')
#
# # 当前返回的是列表类型
# # 此列表中的元素只有一个 ul
# ul_tag = soup.select('ul[class=news-list]')
#
# h3_list = ul_tag[0].select('h3')
#
# for temp in h3_list:
#     print(temp.select('a')[0].text)
#     print(temp.select('a')[0].get('href'))
