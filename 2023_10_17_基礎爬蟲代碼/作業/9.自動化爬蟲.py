# 地址：https://search.suning.com/%E7%94%B5%E8%84%91/
#
# 技术：selenium自动化
#
# 字段：价格、标题   可以自行拓展
#
# 保存：mongo
#
# 交付： 数据入库截图

import time
import pymongo
from random import randint
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException

class SuningShop:
    mongo_client = pymongo.MongoClient(host='localhost', port=27017, username='admin', password='root')
    collection = mongo_client['py_spider']['suning_shop']

    options = webdriver.ChromeOptions()

    prefs = {"profile.managed_default_content_settings.images": 2}
    options.add_experimental_option('prefs', prefs)

    browser = webdriver.Chrome(options=options)

    def index_html(self):
        self.browser.get('https://www.suning.com/')
        wait = WebDriverWait(self.browser, 10)

        el_input = wait.until(EC.presence_of_element_located(
            (By.XPATH, '//*[@id="searchKeywords"]')
        ))
        el_input.send_keys('电脑')

        el_button = wait.until(EC.presence_of_element_located(
            (By.XPATH, '//*[@id="searchSubmit"]')
        ))
        time.sleep(2)
        el_button.click()

        time.sleep(randint(1, 3))

    def drop_down(self):
        for i in range(1, 13):
            js_code = f'window.scrollTo(0, {i * 1000})'
            self.browser.execute_script(js_code)
            time.sleep(randint(1, 3))

    def parse_data(self):
        self.drop_down()
        div_list = self.browser.find_elements(By.XPATH, '//*[@id="product-list"]/ul/li')

        for div in div_list:
            title = div.find_element(By.XPATH, './/div[2]/div[2]/a').text
            price = div.find_element(By.XPATH, './/div[2]/div[1]/span').text

            item = {
                'title': title,
                'price': price
            }
            print(item)
            self.save_data(item)
        self.next_page()

    def next_page(self):
        try:
            next_button = self.browser.find_element(By.XPATH, '//*[@id="nextPage"]')
            if next_button:
                print(next_button.get_attribute('href'))
                next_button.click()
                self.parse_data()
            else:
                self.browser.close()
        except NoSuchElementException as e:
            print('最後一頁:', e)
            self.browser.quit()

    def save_data(self, item):
        self.collection.insert_one(item)

    def main(self):
        self.index_html()
        self.parse_data()


if __name__ == '__main__':
    suningshop = SuningShop()
    suningshop.main()
