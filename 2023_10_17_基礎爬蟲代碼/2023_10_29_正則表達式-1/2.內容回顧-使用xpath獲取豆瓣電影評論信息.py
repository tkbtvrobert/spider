from lxml import etree
import requests

url = 'https://movie.douban.com/subject/1292052/comments?status=P'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 '
                  'Safari/537.36'
}

response = requests.get(url, headers=headers).text
# 先檢查是否有亂碼
# print(response)

tree = etree.HTML(response)

div_list = tree.xpath('//div[@id="comments"]/div[@class="comment-item "]')

for item in div_list:
    content_dict = dict()
    content_dict['content'] = item.xpath('.//span[@class="short"]/text()')
    print(content_dict)
    # content = item.xpath('.//span[@class="short"]/text()')
    # print(content)
