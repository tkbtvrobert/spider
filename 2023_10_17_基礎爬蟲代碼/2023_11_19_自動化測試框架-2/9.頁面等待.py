import time
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
# expected_conditions 可判斷控件是否已經加載完成的方法
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

"""
某些网站的控件是动态生成的, 在生成控件时需要消耗一定的时间
    需要进入到首页后等待一些动态控件加载完成
"""

browser = webdriver.Chrome()
wait_obj = WebDriverWait(browser, 10)

browser.get('https://tw.jd.com')

# wait_obj 如果加載成功，則返回一個 element 對象，失敗則報錯
# 要提取控件一律用 WebDriverWait 方法，不能用 browser.find_element 方法
search_input = wait_obj.until(EC.presence_of_element_located((By.ID, 'key')))
# search_input = browser.find_element(By.ID, 'key')
print(search_input)

# 可以使用WebElement对象进行交互操作
search_input.send_keys('口紅')

# search_button = wait_obj.until(EC.presence_of_element_located((By.ID, 'search-btn')))
search_button = wait_obj.until(EC.presence_of_element_located((By.XPATH, '//*[@id="search-btn"]')))
search_button.click()
time.sleep(10)

# 通过以上方式完成搜索点击
# 点击成功之后会跳转到登录页
