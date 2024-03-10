import scrapy
from scrapy import cmdline
from scrapy.http import HtmlResponse


class Top250Spider(scrapy.Spider):
    name = "top250"
    allowed_domains = ["movie.douban.com", 'doubanio.com']
    start_urls = ["https://movie.douban.com/top250"]

    def parse(self, response: HtmlResponse, **kwargs):
        # print(response.request.headers)
        li_list = response.xpath("//ol[@class='grid_view']/li")
        for li in li_list:
            image_url = li.xpath(".//img/@src").extract_first()
            title = li.xpath(".//span[@class='title'][1]/text()").extract_first()
            rating_num = li.xpath(".//span[@class='rating_num']/text()").extract_first()
            people_num = li.xpath(".//div[@class='star']/span[4]/text()").extract_first()
            # print(image_url, title, rating_num, people_num)

            yield {
                'type': 'info',
                'image_url': image_url,
                'title': title,
                'rating_num': rating_num,
                'people_num': people_num
            }

            yield scrapy.Request(url=image_url, callback=self.parse_image, cb_kwargs={'image_name': title})

        # 翻页代码
        if response.xpath("//span[@class='next']/a/@href"):
            next_url = response.urljoin(response.xpath("//span[@class='next']/a/@href").extract_first())
            print('開始抓取下一頁:', next_url)
            yield scrapy.Request(url=next_url, callback=self.parse)
        else:
            print('全站抓取成功...')

    @staticmethod
    def parse_image(response: HtmlResponse, image_name):
        yield {
            'type': 'image',
            'image_name': image_name + '.jpg',
            'image_content': response.body
        }


if __name__ == '__main__':
    cmdline.execute('scrapy crawl top250'.split())