import requests

"""
requests支持使用字节流的方式下载大型文件
"""
url = 'https://www.baidu.com'

# 如果不加stream(字節流)，會等到所有的數據全部接收到之後才會向下走，導致代碼堵塞
response = requests.get(url, stream=True)

with open('1.html', 'wb') as f:
    for chunk in response.iter_content(chunk_size=100):
        f.write(chunk)


"""
1. 当代码走到9行执行识不会直接发送请求, 走到iter_content才会发送请求并获取内容
2. get方法请求卡顿
"""
