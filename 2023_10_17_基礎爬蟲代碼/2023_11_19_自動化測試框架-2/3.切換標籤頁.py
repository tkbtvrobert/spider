import time
from selenium import webdriver

browser = webdriver.Chrome()

browser.get('https://www.taobao.com')
time.sleep(3)

js = 'window.open("https://www.jd.com")'
browser.execute_script(js)
time.sleep(3)

# 切换到第一个标签页
browser.switch_to.window(browser.window_handles[0])
time.sleep(1)

# 切换到第二个标签页
browser.switch_to.window(browser.window_handles[1])
time.sleep(1)

# 关闭当前所在的标签页
browser.close()
time.sleep(2)

# 這個一定要寫，代表是選中哪個標籤頁，就算只有一個也要寫，不然會報錯
browser.switch_to.window(browser.window_handles[0])
browser.close()
