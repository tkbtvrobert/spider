from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException, NoSuchElementException

browser = webdriver.Chrome()

try:
    browser.set_page_load_timeout(3)
    browser.get('https://www.google.com')
except TimeoutException as e:
    print('請求超時', e)
    browser.close()

try:
    browser.find_element(By.ID, 'abcd')
except NoSuchElementException as e:
    print('元素標籤未找到:', e)