# -*- coding: utf-8 -*-
"""
Created on 2024-01-03 17:46:28
---------
@summary:
---------
@author: Frank
"""

import feapder


class Douban(feapder.AirSpider):
    def start_requests(self):
        yield feapder.Request("https://movie.douban.com/top250?start=0&filter=")

    def download_midware(self, request):
        request.proxies = {
            'http': 'http://127.0.0.1:8080'
        }

    def validate(self, request, response):
        print('響應狀態碼:', response.status_code)
        if response.status_code != 200:
            print('響應狀態碼異常:', response.status_code)
            # 拋棄當前請求
            # return False
            raise Exception('請求重試')

    def parse(self, request, response):
        pass


if __name__ == "__main__":
    Douban().start()