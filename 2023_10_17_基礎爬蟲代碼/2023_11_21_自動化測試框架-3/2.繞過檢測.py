import time
from selenium import webdriver

# 创建浏览器信息配置对象
# 可以隱藏瀏覽器驅動的信息
options = webdriver.ChromeOptions()
options.add_argument('--disable-blink-features=AutomationControlled')

browser = webdriver.Chrome(options=options)
browser.get('https://bot.sannysoft.com/')

time.sleep(10)