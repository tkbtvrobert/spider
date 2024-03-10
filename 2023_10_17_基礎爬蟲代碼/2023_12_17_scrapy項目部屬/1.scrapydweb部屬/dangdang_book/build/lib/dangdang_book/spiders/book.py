import scrapy
# 必须使用指令去启动项目, 不能使用cmdline
from ..items import DangDangBookItem
from scrapy.http import HtmlResponse
from scrapy_redis.spiders import RedisSpider


class BookSpider(RedisSpider):
    name = "book"
    allowed_domains = ["search.dangdang.com"]
    # start_urls = ["http://search.dangdang.com/"]

    redis_key = 'dd_book:start_url'

    def parse(self, response: HtmlResponse, **kwargs):
        li_list = response.xpath('//ul[@class="bigimg"]/li')
        for li in li_list:
            item = DangDangBookItem()
            item['title'] = li.xpath('./a/@title').extract_first()
            item['price'] = li.xpath('./p[@class="price"]/span[1]/text()').extract_first()
            item['author'] = li.xpath('./p[@class="search_book_author"]/span[1]/a[1]/@title').extract_first()
            item['date_data'] = li.xpath('./p[@class="search_book_author"]/span[last()-1]/text()').extract_first()
            item['detail'] = li.xpath('./p[@class="detail"]/text()').extract_first() if li.xpath(
                './p[@class="detail"]/text()') else '空'
            item['producer'] = li.xpath(
                './p[@class="search_book_author"]/span[last()]/a/text()').extract_first() if li.xpath(
                './p[@class="search_book_author"]/span[last()]/a/text()') else '空'

            yield item

        if response.xpath('//ul[@name="Fy"]/li[@class="next"]/a/@href').extract_first() is not None:
            next_url = response.urljoin(
                response.xpath('//ul[@name="Fy"]/li[@class="next"]/a/@href').extract_first())
            yield scrapy.Request(url=next_url, callback=self.parse)