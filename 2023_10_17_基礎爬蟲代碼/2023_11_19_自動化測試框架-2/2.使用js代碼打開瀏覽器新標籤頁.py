import time
from selenium import webdriver

browser = webdriver.Chrome()
browser.get('https://www.taobao.com')
time.sleep(3)

js = 'window.open("https://www.jd.com")'
browser.execute_script(js)
time.sleep(3)