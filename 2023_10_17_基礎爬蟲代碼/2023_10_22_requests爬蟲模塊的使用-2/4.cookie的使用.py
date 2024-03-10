import requests

url = 'https://www.baidu.com'

response = requests.get(url)
# 获取到响应头中的cookie
print(response.cookies)

# 提取cookie信息的两种方式
cookie = response.cookies
print(dict(cookie))

# 此方法為反射
cookie = requests.utils.dict_from_cookiejar(response.cookies)
print(cookie)