import time
from selenium import webdriver

# 创建浏览器配置对象
options = webdriver.ChromeOptions()

# 禁止图片加载，1代表加載、2代表不加載
prefs = {"profile.managed_default_content_settings.images": 2}
options.add_experimental_option('prefs', prefs)

# 设置UA
user_agent = 'abc'
options.add_argument(f'user-agent={user_agent}')

# 隐藏浏览器开发者警告
options.add_experimental_option('useAutomationExtension', False)
options.add_experimental_option('excludeSwitches', ['enable-automation'])

# 代理配置
# options.add_argument("--proxy-server=http://127.0.0.1:7890")

browser = webdriver.Chrome(options=options)
browser.get('https://www.taobao.com')
time.sleep(30)
