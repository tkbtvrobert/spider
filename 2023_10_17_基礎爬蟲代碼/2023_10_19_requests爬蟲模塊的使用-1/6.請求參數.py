import requests

# url='https://www.baidu.com/s'
#
# kw={'wd':'python'}
#
# response=requests.get(url, params=kw)
#
# print(response.url)

headers={
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 "
                 "Safari/537.36"
}

url='https://www.baidu.com/s?wd=python'
response=requests.get(url, headers=headers)
print(response.content.decode())
