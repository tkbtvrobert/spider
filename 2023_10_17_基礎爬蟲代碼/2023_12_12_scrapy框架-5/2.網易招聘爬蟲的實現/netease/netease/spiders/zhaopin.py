import scrapy
from scrapy_redis.spiders import RedisSpider
from scrapy import cmdline
from scrapy.http import JsonRequest


# 增量爬蟲的作用是在停止爬蟲之後再重新啟動可以避免重複抓取同一個url
class ZhaoPinSpider(scrapy.Spider):
    name = "zhaopin"
    allowed_domains = ["abc"]

    # start_urls = ["https://hr.163.com/api/hr163/position/queryPage"]

    # 不能在分布式 RedisSpider 中重寫此方法
    def start_requests(self):
        api_url = 'https://hr.163.com/api/hr163/position/queryPage'
        for page in range(1, 2):
            json_data = {
                'currentPage': page,
                'pageSize': 10
            }
            yield JsonRequest(api_url, data=json_data)

    def parse(self, response, **kwargs):
        # print(response.json())
        work_list = response.json()['data']['list']
        for work in work_list:
            item = dict()
            item['work_id'] = work['id']
            item['postTypeFullName'] = work['postTypeFullName']
            item['reqEducationName'] = work['reqEducationName']
            item['workPlaceNameList'] = work['workPlaceNameList'][0]
            item['requirement'] = work['requirement']

            yield item


if __name__ == '__main__':
    cmdline.execute('scrapy crawl zhaopin'.split())
