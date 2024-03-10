# -*- coding: utf-8 -*-
"""
Created on 2024-01-04 01:16:43
---------
@summary:
---------
@author: Frank
"""

import time
import feapder
from feapder.utils.webdriver import WebDriver


class JobInfo(feapder.AirSpider):
    def start_requests(self):
        yield feapder.Request("https://q.yingjiesheng.com/jobs/search/Python?jobarea=220200", render=True)

    def parse(self, request, response):
        browser: WebDriver = response.browser
        # 获取对应接口前延时一秒等待接口加载
        time.sleep(10)
        json_data = browser.xhr_json('open/noauth/job/search')
        print(json_data)

        for temp in json_data['resultbody']['searchData']['joblist']['items']:
            item = dict()
            item['jobname'] = temp['jobname']
            item['coname'] = temp['coname']
            item['jobarea'] = temp['jobarea']
            item['issuedate'] = temp['issuedate']
            item['jobtag'] = temp['jobtag']
            item['providesalary'] = temp['providesalary']
            print(item)


if __name__ == "__main__":
    JobInfo().start()