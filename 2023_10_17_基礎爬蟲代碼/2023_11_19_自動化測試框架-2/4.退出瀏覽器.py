import time
from selenium import webdriver

browser = webdriver.Chrome()
browser.get('https://www.baidu.com')
time.sleep(3)

# 如果当前只剩下一个标签页则会退出浏览器，只能剩下最後一個標籤頁
browser.close()

# 让浏览器退出，多個分頁
browser.quit()