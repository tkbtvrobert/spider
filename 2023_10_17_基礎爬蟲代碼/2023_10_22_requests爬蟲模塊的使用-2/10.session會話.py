# session及其用法 https://www.jianshu.com/p/8c3f63c63c57

import requests

# 1. 创建一个session对象
session = requests.session()

# 2. 创建一个headers
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 '
                  'Safari/537.36'
}

# 3. 使用session对象发送请求
response = session.get('https://www.baidu.com', headers=headers)
print('第一次請求的請求頭為:', response.request.headers)
print('響應頭:', response.headers)
print('服務器設置的cookie為', requests.utils.dict_from_cookiejar(response.cookies))

# 4.第二次请求时会携带服务器设置的set-cookie中的值
response = session.get('https://www.baidu.com')
print(response.request.headers.get('Cookie'))
