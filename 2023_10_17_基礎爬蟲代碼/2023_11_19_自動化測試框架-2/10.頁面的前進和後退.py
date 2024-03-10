import time
from selenium import webdriver

browser = webdriver.Chrome()
browser.get('https://tw.jd.com')
time.sleep(2)

browser.get('https://www.baidu.com')
time.sleep(2)

# 在同一个标签页中进行后退
# 上一頁
browser.back()
time.sleep(1)

# 下一頁
browser.forward()
time.sleep(1)