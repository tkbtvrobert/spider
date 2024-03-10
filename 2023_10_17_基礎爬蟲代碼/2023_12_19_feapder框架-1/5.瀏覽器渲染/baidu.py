# -*- coding: utf-8 -*-
"""
Created on 2024-01-03 21:30:32
---------
@summary:
---------
@author: Frank
"""

import feapder
from selenium.webdriver.common.by import By
from feapder.utils.webdriver import WebDriver


class Baidu(feapder.AirSpider):
    def start_requests(self):
        yield feapder.Request("https://www.baidu.com", render=True)

    def parse(self, request, response):
        browser: WebDriver = response.browser
        browser.find_element(By.ID, 'kw').send_keys('feapder')
        browser.find_element(By.ID, 'su').click()


if __name__ == "__main__":
    Baidu().start()