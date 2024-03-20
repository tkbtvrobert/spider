

import requests
import re
import execjs



requests = requests.session()

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
}

url = 'https://www.mafengwo.cn/i/5376978.html'


def first_request():
    response = requests.get(url, headers=headers)
    cok = re.findall('document.cookie=(.*?);location', response.text)[0]
    __jsl_clearance_s = execjs.eval(cok).split('nce_s=')[-1]
    __jsluid_s = response.cookies.get('__jsluid_s')
    return __jsl_clearance_s, __jsluid_s


def sec_request(__jsl_clearance_s, __jsluid_s):
    cookies = {
        "__jsl_clearance_s": __jsl_clearance_s,
        '__jsluid_s': __jsluid_s
    }
    res = requests.get(url, headers=headers, cookies=cookies)
    go_code = re.findall(';go\((.*?)\)</script>', res.text)[0]
    js = execjs.compile(open('04-加速乐.js', encoding='utf-8').read())
    # go函數裏面获取到的加密算法是不一样的
    # print(go_code)
    __jsl_clearance_s1 = js.call('go', go_code)
    print(__jsl_clearance_s1)
    # 怎么效验js问题
    cookies['__jsl_clearance_s'] = __jsl_clearance_s1.split('nce_s=')[-1]
    return cookies

def thi_request():
    __jsl_clearance_s, __jsluid_s = first_request()
    cookies = sec_request(__jsl_clearance_s, __jsluid_s)
    print(cookies)
    res = requests.get(url, headers=headers, cookies=cookies)
    print(res.text)


thi_request()















