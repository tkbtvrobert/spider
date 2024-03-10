import time
from selenium import webdriver

browser = webdriver.Chrome()
browser.get('https://www.baidu.com')

cookie_list = browser.get_cookies()
# print(cookie_list)

cookie_dict = {x["name"]: x["value"] for x in cookie_list}
print(cookie_dict)

browser.close()

# cookie设置
# browser.add_cookie({'name': '安娜'})

# cookie删除
browser.delete_cookie('cookie_name')
# 删除全部
browser.delete_all_cookies()