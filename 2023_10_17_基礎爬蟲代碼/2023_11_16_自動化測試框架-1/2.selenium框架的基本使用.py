import time
from selenium import webdriver

# 1.创建浏览器对象
browser = webdriver.Chrome()
# 为了防止浏览器闪退 可以做代码延迟
time.sleep(3)

# 2.让操作系统中的浏览器访问百度
browser.get('http://www.baidu.com')
time.sleep(5)

# 3.截屏
# browser.save_screenshot('百度首頁.png')

# 4.获取到当前访问的页面的源代码
html = browser.page_source
print(html)