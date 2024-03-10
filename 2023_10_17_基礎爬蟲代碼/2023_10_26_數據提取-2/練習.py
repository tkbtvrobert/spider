import requests
from bs4 import BeautifulSoup

url = 'https://weixin.sogou.com/weixin?_sug_type_=1&type=2&query=python'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 '
                  'Safari/537.36'
}

response = requests.get(url, headers=headers).text
soup = BeautifulSoup(response, 'lxml')

# 使用find_all查找所有class属性为'news-list'的ul元素
ul_list = soup.find_all('ul', class_='news-list')

# 遍历每个ul元素，然后在每个ul元素中查找h3元素
for ul in ul_list:
    h3_list = ul.find_all('h3')

    for h3 in h3_list:
        # 查找a元素并提取标题和链接
        a_tag = h3.find('a')
        title = a_tag.get_text()
        link = a_tag.get('href')

        print(title, link)

# response = requests.get(url, headers=headers).text
# soup = BeautifulSoup(response, 'lxml')
# ul_tag = soup.select('ul[class="news-list"]')
# # print(ul_tag)
#
# h3_list = ul_tag[0].select('h3')
# for temp in h3_list:
#     print(temp.select('a')[0].get_text(), temp.select('a')[0].get('href'))
