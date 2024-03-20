# import requests
# from curl_cffi import requests
#
# headers = {
#
#     "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0"
# }
# url = "https://ascii2d.net/"
# response = requests.get(url, headers=headers, impersonate="edge99")
#
# print(response.text)
# print(response)

import requests
from curl_cffi import requests

print("edge99:", requests.get("https://tls.browserleaks.com/json", impersonate="edge99").json())
print("chrome110:", requests.get("https://tls.browserleaks.com/json", impersonate="chrome110").json())