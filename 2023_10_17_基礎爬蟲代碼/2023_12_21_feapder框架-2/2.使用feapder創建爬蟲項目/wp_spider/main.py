# -*- coding: utf-8 -*-
"""
Created on 2024-01-04 11:33:57
---------
@summary: 爬虫入口
---------
@author: Frank
"""

from feapder import ArgumentParser

from spiders import *


def crawl_wp_shop_info():
    """
    AirSpider爬虫
    """
    spider = wp_shop_info.WpShopInfo()
    spider.start()


if __name__ == "__main__":
    parser = ArgumentParser(description="爬虫控制")

    parser.add_argument(
        "--crawl_wp_shop_info", action="store_true", help="唯品會爬虫", function=crawl_wp_shop_info
    )

    parser.start()

    # main.py作为爬虫启动的统一入口，提供命令行的方式启动多个爬虫，若只有一个爬虫，可不编写main.py
    # 将上面的xxx修改为自己实际的爬虫名
    # 查看运行命令 python main.py --help
    # AirSpider与Spider爬虫运行方式 python main.py --crawl_xxx
    # BatchSpider运行方式
    # 1. 下发任务：python main.py --crawl_xxx 1
    # 2. 采集：python main.py --crawl_xxx 2
    # 3. 重置任务：python main.py --crawl_xxx 3
