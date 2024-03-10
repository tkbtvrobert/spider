# -*- coding: utf-8 -*-
"""
Created on 2024-01-03 16:14:17
---------
@summary:
---------
@author: Frank
"""

import feapder


class Douban(feapder.AirSpider):
    def start_requests(self):
        # request对象支持载入多个自定义中间件, 将download_midware的参数设置为一个列表即可
        # 但是一般不使用, 在一个中间件中配置好所有的request参数即可
        yield feapder.Request("https://movie.douban.com/top250?start=0&filter=", download_midware=[self.custom_download_midware_1, self.custom_download_midware_2])

    # 自動加載
    # def download_midware(self, request):
    #     request.headers = {
    #         'User-Agent': 'abc'
    #     }
    #
    #     request.proxies = {
    #         'http': 'http://127.0.0.1:7890'
    #     }
    #
    #     request.cookies = {
    #         'a': 'b'
    #     }
    #
    #     return request

    # 手動加載自定義
    def custom_download_midware_1(self, request):
        request.headers = {
            'User-Agent': '123'
        }
        return request

    def custom_download_midware_2(self, request):
        request.cookies = {
            'a': 'b'
        }
        return request

    def parse(self, request, response):
        pass


if __name__ == "__main__":
    Douban().start()