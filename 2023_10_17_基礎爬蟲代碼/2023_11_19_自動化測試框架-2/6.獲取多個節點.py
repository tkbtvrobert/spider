import time
from selenium import webdriver
from selenium.webdriver.common.by import By

browser = webdriver.Chrome()
browser.get('https://movie.douban.com/top250')

# 定位25个电影信息
# By.CSS_SELECTOR #號定位的是ID .號定位的是class的value
# result = browser.find_elements(By.CSS_SELECTOR, '.item')
# print(result)

result = browser.find_elements(By.XPATH, '//div[@class="item"]')
print(result)

"""
find_element: 返回的是单个对象
find_elements: 返回的是一个列表
By.PARTIAL_LINK_TEXT: 根據部分文字進行模糊查詢
By.LINK_TEXT: 將所有的文字全部輸入進去之後進行匹配
"""