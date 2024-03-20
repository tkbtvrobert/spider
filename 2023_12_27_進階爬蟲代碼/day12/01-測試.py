import requests


headers = {
    "Accept": "application/json",
    "Accept-Language": "zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6,vi;q=0.5",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Origin": "https://fuwu.nhsa.gov.cn",
    "Pragma": "no-cache",
    "Referer": "https://fuwu.nhsa.gov.cn/nationalHallSt/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "X-Tingyun": "c=B^|4Nl_NnGbjwY;x=f7746dd27663426e",
    "channel": "web",
    "contentType": "application/x-www-form-urlencoded",
    "sec-ch-ua": "Not_A",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "Windows",
    "x-tif-nonce": "L3nmSZ2N",
    "x-tif-paasid": "undefined",
    "x-tif-signature": "3b3ec841ebbb8f20f99756586fed2b4f512e5cf3ca26301be669e887f544e7eb",
    "x-tif-timestamp": "1706152100"
}
cookies = {
    "__jsluid_s": "3a4817f2af0eba0fb150c34028ee6763",
    "yb_header_active": "-1",
    "amap_local": "710000"
}
url = "https://fuwu.nhsa.gov.cn/ebus/fuwu/api/nthl/api/CommQuery/queryFixedHospital"
data = {"data":{"data":{"encData":"3DFBCA4667B978F639BB23B95DCE4CC74CE34C33DC32F1068E9E23CA546C9EA8CCD20943B4DAE96380B41164D761DE9742C84A985FE3BABC31CB352556BB87C9C1495DB24A29AB6BC3A85AB7FCA00F338EE714ACFC4C924F01CF575098AEF16755EE6C2B00989F3CBDACE061021CBD579720F6A86E9EFCBA77082625D345D5DFD130FEBBE62DBFF03225CA796232EA15C36959880C2647559E3C97B56FD4F10F"},"appCode":"T98HPCGN5ZVVQBS8LZQNOAEXVI9GYHKQ","version":"1.0.0","encType":"SM4","signType":"SM2","timestamp":1706152100,"signData":"D4SfuYoFTR3jMmCE/nMNojimbirUNH0SzoURlzoYOnk8lkw/ZY+VYFV+K5SIW1jvO3/F21vVKKOen1FbAjsNGw=="}}
response = requests.post(url, headers=headers, cookies=cookies, json=data)

print(response.text)
print(response)