import time
from selenium import webdriver
from selenium.webdriver.common.by import By

browser = webdriver.Chrome()
browser.get('http://news.baidu.com/')

element_obj_1 = browser.find_element(By.ID, 'ww')
print(element_obj_1)

element_obj_2 = browser.find_element(By.CSS_SELECTOR, '#ww')
print(element_obj_2)

element_obj_3 = browser.find_element(By.CSS_SELECTOR, '.word')
print(element_obj_3)

# XPATH 比較常用
element_obj_4 = browser.find_element(By.XPATH, '//*[@id="ww"]')
print(element_obj_4)

"""
最常用的順序為XPATH、CLASS_NAME、CSS_SELECTOR、ID
"""