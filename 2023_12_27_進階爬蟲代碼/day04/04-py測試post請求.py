import requests

res = requests.post('http://127.0.0.1:8080/api', json={'aa': 123456})
print(res.text)