import scrapy
from scrapy import cmdline
from scrapy.http import HtmlResponse


class QingTingSpider(scrapy.Spider):
    name = "qingting"
    allowed_domains = ["m.qingting.fm"]
    start_urls = ["https://m.qingting.fm/rank/"]

    # 加上 **kwargs 黃線會消失
    def parse(self, response: HtmlResponse, **kwargs):
        """
        :param response:
        :return:

        当前函数为回调函数, 当对start_url进行请求后, scrapy会讲请求完成的响应对象传递给当前函数

        """
        # print('手動打印的回應對象:', response)
        # # 响应的url地址
        # print('---1--->:', response.url)
        # # 响应头
        # print('---2--->:', response.headers)
        # # 响应状态码
        # print('---3--->:', response.status)
        # # 响应体 body=content
        # print('---4--->:', response.body)
        # # 请求地址
        # print('---5--->:', response.request.url)
        # # 请求头
        # print('---6--->:', response.request.headers)

        a_list = response.xpath('//div[@class="rank-list"]/a')
        # 在列表中的元素的类型是: Selector, 支持xpath提取
        for a_temp in a_list:
            # 返回Selector对象中的data数据, 返回类型是一个列表
            # print(rank_number.extract())
            # 获取的是data信息列表中的第一个元素，就是 rank_number.extract()[0]
            # print(rank_number.extract_first())

            rank_number = a_temp.xpath('./div[@class="badge"]/text()').extract_first()
            # print(rank_number)
            img_url = a_temp.xpath('./img/@src').extract_first()
            title = a_temp.xpath('./div[@class="content"]/div[@class="title"]/text()').extract_first()
            desc = a_temp.xpath('.//div[@class="desc"]/text()').extract_first()

            # print(rank_number, title, img_url, desc)

            """
            return 會中斷 parse 函數
            這個是協程運行的，yield 才支持任務切換，且 parse 可以多個，耗時就切換成 parse_2
            且生成器可以節約內存
            
            """
            yield {
                'rank_number': rank_number,
                'title': title,
                'img_url': img_url,
                'desc': desc
            }


if __name__ == '__main__':
    cmdline.execute('scrapy crawl qingting'.split())


"""
1.获取页面中的指定数据可以使用响应对象中封装的xpath方法进行数据提取
2.xpath返回的对象是Selector对象, Selector对象中包含了提取标签中的data信息
3.获取data信息可以使用extract()和extract_first()两个方法
4.extract返回的是列表, 和extract_first返回的是列表中的第一个元素
--nolog 可隱藏紅色字，cmdline.execute('scrapy crawl qingting --nolog'.split())
"""