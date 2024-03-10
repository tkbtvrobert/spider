import json

import scrapy
from scrapy.http import FormRequest
from scrapy_redis.spiders import RedisSpider


class JcSpider(RedisSpider):
    name = "jc"
    allowed_domains = ["www.cninfo.com.cn"]
    # start_urls = ["http://www.cninfo.com.cn/"]

    redis_key = 'jc:start_urls'

    def make_request_from_data(self, data):
        # 因為 url 不會變化，放這就行
        url = 'http://www.cninfo.com.cn/new/disclosure'
        """
        :param data: data参数是从redis中获取到的列表 - [url, form_data, meta]
        :return:
        """
        data = json.loads(data)
        form_data = data.get('form_data')
        print(form_data)

        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
                          "Chrome/120.0.0.0 Safari/537.36",
        }

        return FormRequest(url=url, headers=headers, formdata=form_data, callback=self.parse)

    def parse(self, response, **kwargs):
        print('返回信息:', response.json())
