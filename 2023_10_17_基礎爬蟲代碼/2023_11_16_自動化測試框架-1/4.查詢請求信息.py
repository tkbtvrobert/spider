import time
from selenium import webdriver

browser = webdriver.Chrome()
browser.get('https://www.baidu.com')

# 获取访问的页面源代码
# html = browser.page_source
# print(html)

# 获取cookie
print(browser.get_cookies())

# 获取请求的url地址
browser.get('https://www.360buy.com')
# 获取的是浏览器最终访问的页面，也就是跳轉後的地址
print(browser.current_url)
