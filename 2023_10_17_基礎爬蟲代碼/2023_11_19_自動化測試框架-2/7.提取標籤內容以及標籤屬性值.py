import time
from selenium import webdriver
from selenium.webdriver.common.by import By

browser = webdriver.Chrome()
browser.get('https://www.douban.com')

result_1 = browser.find_element(By.TAG_NAME, 'h1')
# 因為這邊 text 被 @property 所裝飾所以此處不加小括號()
print(result_1.text)

result_2 = browser.find_element(By.LINK_TEXT, '下载豆瓣 App')
print(result_2.get_attribute('href'))
