import execjs
import requests

# 请求资源地址
url = 'https://api.qimai.cn/indexV2/getIndexRank'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 '
                  'Safari/537.36'
}
params = {
    # 'analysis': 'eyErVShbVhNbVVIbMlMWUQASLgYcHAJnUFkIJEINBVJXXlhJS04MBndAVw==',
    'setting': '0',
    'genre': '36'
}
# print(list(params.values()))
res = list(params.values())
# 读取js代码
f = open('01-七麥js代碼.js', encoding='utf-8')
js_code = f.read()
# 将js放进js环境当中
js = execjs.compile(js_code)
analysis = js.call('get_data', res)
# print(analysis)
params['analysis'] = analysis

response = requests.get(url, params=params, headers=headers)
print(response.text)