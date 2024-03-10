import requests

# 获取百度logo图片
url = 'https://www.baidu.com/img/bd_logo1.png'

# 请求指定网址
response = requests.get(url).content

# 写入二进制信息到文件中
with open('baidu.png', 'wb') as f:
    f.write(response)
