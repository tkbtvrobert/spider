import scrapy
from scrapy import cmdline
from scrapy.http import HtmlResponse
from scrapy.core import engine # 已經實現了引擎的所有功能，不需要我們開發者進行二次開發


class QingTingSpider(scrapy.Spider):
    name = "qingting"
    # 要記得增加爬取資料的域名
    allowed_domains = ["m.qingting.fm", "pic.qtfm.cn"]
    start_urls = ["https://m.qingting.fm/rank/"]

    # 加上 **kwargs 黃線會消失
    def parse(self, response: HtmlResponse, **kwargs):
        a_list = response.xpath('//div[@class="rank-list"]/a')
        for a_temp in a_list:
            rank_number = a_temp.xpath('./div[@class="badge"]/text()').extract_first()
            img_url = a_temp.xpath('./img/@src').extract_first()
            title = a_temp.xpath('./div[@class="content"]/div[@class="title"]/text()').extract_first()
            desc = a_temp.xpath('.//div[@class="desc"]/text()').extract_first()

            """
            return 會中斷 parse 函數
            這個是協程運行的，yield 才支持任務切換，且 parse 可以多個，耗時就切換成 parse_2
            且生成器可以節約內存
            yield 可以回傳四種，dict、item、none、request
            """
            yield {
                'type': 'info',
                'rank_number': rank_number,
                'title': title,
                'img_url': img_url,
                'desc': desc
            }

            # 需要在parse函数中重新构建一个新的request对象并对图片地址发送请求
            # 如果解析函数中存在自定义形参则需要使用cb_kwargs进行传参, key值必须和函数中的形参名称一致

            yield scrapy.Request(img_url, callback=self.image_parse, cb_kwargs={'image_name': title})

    # 图片解析函数
    @staticmethod
    def image_parse(response: HtmlResponse, image_name):
        yield {
            'type': 'image',
            'image_name': image_name + '.jpg',
            'image_content': response.body
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