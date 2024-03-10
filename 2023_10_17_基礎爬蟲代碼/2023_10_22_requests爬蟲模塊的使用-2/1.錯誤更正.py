import requests

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 '
                  'Safari/537.36',
    'Cookie': 'bid=fPUna4EsAo0; ap_v=0,6.0'
}

url = 'https://movie.douban.com/top250?start=0&filter='

response = requests.get(url, headers=headers)

# 获取请求头使用以下这种方式
print(response.request.headers.get('Cookie'))

# 不是用這種方式了
# print(response.request.cookies)
