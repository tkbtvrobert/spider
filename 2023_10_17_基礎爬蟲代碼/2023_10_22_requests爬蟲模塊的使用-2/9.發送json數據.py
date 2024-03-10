import requests

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 '
                  'Safari/537.36'
}

response = requests.get('https://fanyi.baidu.com/sug', headers=headers, json={'kw': 'python'}, timeout=3)
print(response.request.headers)
print(response.request.body)
