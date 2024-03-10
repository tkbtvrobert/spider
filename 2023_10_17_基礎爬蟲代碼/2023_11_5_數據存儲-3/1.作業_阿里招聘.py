import requests
import pymysql


class AliWork:
    def __init__(self):
        self.db = pymysql.connect(host='localhost', user='root', password='root', db='py_spider')
        self.cursor = self.db.cursor()
        self.api_url = 'https://talent.taotian.com/position/search?_csrf=33ab0e1e-d5a6-417f-addd-a1a530eec2a1'

        """
        有碰到api就一定要有Cookie
        判斷是否為api:
            1. 請求網址上有api
            2. 請求方法是POST，70%~80%是api
            3. 如果請求方法是GET，返回的數據是JSON，也是api
        """
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                          'Chrome/119.0.0.0 Safari/537.36',
            'Referer': 'https://talent.taotian.com/off-campus/position-list?lang=zh',
            'Cookie': 'XSRF-TOKEN=33ab0e1e-d5a6-417f-addd-a1a530eec2a1; prefered-lang=zh; '
                      'SESSION=MDA5NkEyODZGNzA5MEMyNDBDQ0NCOEZFNkI0OUVFQ0E=; '
                      'isg=BOrqR4FAe_RbEvcYGhlXxfh1O1CMW2613QcNd3S2Yj8Ip4JhWO8GxDeRN9u7V-ZN'
        }

    # 获取数据
    def get_work_info(self):
        for page in range(1, 11):
            json_data = {
                'batchId': "",
                'categories': "",
                'channel': "group_official_site",
                'deptCodes': [],
                'key': "",
                'language': "zh",
                'pageIndex': page,
                'pageSize': 10,
                'regions': "",
                'subCategories': ""
            }
            response = requests.post(self.api_url, headers=self.headers, json=json_data).json()
            yield response['content']['datas']

    # 解析数据
    def parse_work_info(self, response):
        for work_info_list in response:
            for work_info in work_info_list:
                item = dict()
                # categories是職業類別，可能為空，且返回的是list故要用[0]來取
                item['categories'] = work_info['categories'][0] if work_info['categories'] else '空'
                item['name'] = work_info['name']
                item['description'] = work_info['description']
                print(item)

                # 数据解析完成之后需要调用其他的实例方法完成保存任务
                self.insert_work(0, item['categories'], item['name'], item['description'])

    # 创建数据表
    def create_table(self):
        sql = """
            create table if not exists ali_work(
                id int primary key auto_increment,
                categories varchar(20),
                work_name varchar(50),
                work_desc text
            );
        
        """
        try:
            # 游標去執行sql指令
            self.cursor.execute(sql)
            print('表創建成功...')
        except Exception as e:
            print('表創建失敗:', e)

    # 数据保存
    def insert_work(self, *args):
        sql = """
            insert into ali_work(
                id,
                categories,
                work_name,
                work_desc
            ) values (%s, %s, %s, %s);
        """
        try:
            self.cursor.execute(sql, args)
            self.db.commit()
            print('數據插入成功...')
        except Exception as e:
            print('數據插入失敗:', e)
            self.db.rollback()

    def main(self):
        self.create_table()
        all_work_generator_object = self.get_work_info()
        self.parse_work_info(all_work_generator_object)


if __name__ == '__main__':
    ali_work = AliWork()
    ali_work.main()
