import time
from selenium import webdriver

# 创建浏览器对象
browser = webdriver.Chrome()
browser.get('https://www.baidu.com')
time.sleep(3)

# 在原有的标签页中重新访问一个新的网址
browser.get('https://www.jd.com')
time.sleep(3)

browser.close()