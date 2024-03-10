"""
結構化數據比非結構化數據好處理
如果要把JSON打包成字典，必須變成字典類型
方法1: 把多餘部分進行切片
方法2: 檢查 api 鏈結是否有 callback 回調函數，
        callback 會將數據進行一次封裝，將原有的 JSON 轉為文本數據，這時會加大爬蟲的難度，
        此時把 api 上的 callback 去掉即可
"""

"""
分析思路:
    1.在首页中获取汽车id
    2.将获取到的汽车id拼接到api数据接口中
    3.保存数据
"""
import redis
import hashlib
import chardet
import asyncio
import aiohttp
import aiomysql
from lxml import etree


class CarSpider:
    redis_client = redis.Redis()

    def __init__(self):
        # 翻頁問題
        self.url = 'https://www.che168.com/china/a0_0msdgscncgpi1ltocsp{}exf4x0/?pvareaid=102179#currengpostion'
        # 內頁車種參數
        self.api_url = 'https://cacheapigo.che168.com/CarProduct/GetParam.ashx?specid={}'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                          'Chrome/119.0.0.0 Safari/537.36'
        }

    # 获取汽车id
    async def get_car_id(self, page, session, pool):
        async with session.get(self.url.format(page), headers=self.headers) as response:
            content = await response.read()
            # 汽车之家会检测是否频繁请求, 如果频繁请求则将页面替换成UTF8编码格式并无法获取汽车id
            encoding = chardet.detect(content)['encoding']
            # print(encoding)
            if encoding == 'GB2312':
                result = content.decode('gbk')
            else:
                result = content.decode(encoding)
                print(result)

    # 启动函数
    async def main(self):
        # 创建数据库连接池并获取游标对象
        # pool 是連接池對象
        async with aiomysql.create_pool(user='root', password='root', db='py_spider') as pool:
            # 連接池對象返回了連接對象，conn 是連接對象
            async with pool.acquire() as conn:
                # 連接對象會返回游標對象
                async with conn.cursor() as cursor:
                    # 创建表
                    # 無法使用 create table if not exists car_info
                    create_table_sql = """
                        create table car_info(
                            id int primary key auto_increment,
                            name varchar(100),
                            price varchar(100),
                            brand varchar(100),
                            altitude varchar(100),
                            breadth varchar(100),
                            length varchar(100)
                        );
                    """
                    # 在异步代码中必须先要检查表是否存在, 直接使用if not语句无效
                    check_table_query = "show tables like 'car_info'"
                    # 如果表存在返回1 不存在返回0
                    result = await cursor.execute(check_table_query)
                    if not result:
                        await cursor.execute(create_table_sql)

            # 创建请求对象
            async with aiohttp.ClientSession() as session:
                tasks = [asyncio.create_task(self.get_car_id(page, session, pool)) for page in range(1, 16)]
                await asyncio.wait(tasks)


if __name__ == "__main__":
    car = CarSpider()
    asyncio.run(car.main())
