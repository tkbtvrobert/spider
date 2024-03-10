import requests

# 如果某些网站响应时间过程应该设置超时时间让程序抛出异常
# 否则可能会让当前爬虫项目卡死
response = requests.get('https://www.google.com', timeout=2)
print(response)