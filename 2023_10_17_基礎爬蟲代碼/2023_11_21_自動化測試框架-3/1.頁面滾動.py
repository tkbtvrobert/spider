import time
from selenium import webdriver

browser = webdriver.Chrome()
browser.get('https://36kr.com')

for num in range(1, 10):
    # 绝对位置 0-700 0-1400 會回到0起始點往下跑
    # browser.execute_script(f'window.scrollTo(0, {num*700})')
    # time.sleep(1)

    # 相对位置 下移的位置終點變成起始點
    browser.execute_script(f'window.scrollBy(0, {num*700})')
    time.sleep(1)

