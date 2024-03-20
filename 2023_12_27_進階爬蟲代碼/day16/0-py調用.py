import requests

data = {
    'group': 'ths',
    'action': 'aaa'
}
res = requests.post('http://127.0.0.1:5620/business-demo/invoke', data=data)
print(res.text)