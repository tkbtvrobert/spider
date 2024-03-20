
import requests,execjs,re,json

requests=requests.session()

url="https://ac.dun.163.com/v3/d"

with open("./d.js", 'r', encoding='utf-8') as f:
    code = f.read()


referer ="https://dun.163.com/"
headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-type': 'application/x-www-form-urlencoded',
    'Origin': referer,
    'Pragma': 'no-cache',
    'Referer': referer,
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'cross-site',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
    'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
}
d_data = execjs.compile(code).call('get_d')
data = {
    'd': d_data,
    'v': '33d41777',  # 602a5ad7
    'cb': '__wmjsonp_93cddf1',
}
response = requests.post('https://ac.dun.163.com/v3/d', headers=headers, data=data).text
response = re.search(r'\((.*?)\)', response).group(1)
print(response)
response = json.loads(response)
WM_TID = response[2]
WM_DID = response[3]

#  ================================================================ b包区域 ==================================================
headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-type': 'application/x-www-form-urlencoded',
    'Origin': referer,
    'Pragma': 'no-cache',
    'Referer': referer,
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'cross-site',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
    'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
}
Ma =execjs.compile(code).call('kE')
print(Ma)
b_data = execjs.compile(code).call('get_b', WM_TID, WM_DID)

data = {
    'd': b_data,
    'v': '33d41777',
    'cb': '__wmjsonp_93cddf1',
}
response = requests.post('https://ac.dun.163.com/v3/b', headers=headers, data=data).text


print(response)