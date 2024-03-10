import requests

"""
如果想要获取一个超大型的电商网站中的数据，需要24小时不停的抓取数据
    可能造成你电脑的ip被封禁
"""

# proxies = {
#     # 可以使用自己定义的ip地址去访问目标网站, 从而达到隐藏自己本机真实ip的功能
#     'http': 'http://10.92.118.47:8080',
#     'https': 'https://10.92.118.47:3290'
# }
#
# response = requests.get('http://www.baidu.com', proxies=proxies, timeout=3)
# print(response)

# 使用免费代理进行请求测试
ip = '61.216.156.222'
port = 60808

proxies = {
    'http': f'http://{ip}:{port}',
    'https': f'https://{ip}:{port}'
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 '
                  'Safari/537.36'
}

url = 'http://httpbin.org/ip'

response = requests.get(url=url, headers=headers, proxies=proxies, timeout=4)
print(response.text)