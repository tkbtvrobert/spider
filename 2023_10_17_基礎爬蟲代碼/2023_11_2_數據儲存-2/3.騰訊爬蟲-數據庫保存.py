import pymysql
import requests


class TxWork:
    # 類屬性
    url = 'https://careers.tencent.com/tencentcareer/api/post/Query?timestamp=1699852455276&countryId=&cityId=&bgIds' \
          '=&productId=&categoryId=&parentCategoryId=&attrId=1&keyword=python&pageIndex={}&pageSize=10&language=zh-cn' \
          '&area=tw'

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                      'Chrome/119.0.0.0 Safari/537.36'
    }

    def __init__(self):
        # 一個實例對象有自己一份
        # 實例屬性
        self.db = pymysql.connect(host='localhost', user='root', password='root', db='py_spider')
        self.cursor = self.db.cursor()

    def __del__(self):
        # 当这个类的生命周期为del退出时, 会触发__del__方法
        self.cursor.close()
        self.db.close()

    # 获取数据 当前方法是一个生成器函数, 所以调用后会返回一个生成器对象
    # 類方法佔用內存比實例方法和靜態方法還低
    @classmethod
    def get_work_info(cls):
        # work_list = list()
        for page in range(1, 11):
            response = requests.get(cls.url.format(page), cls.headers).json()
            print(f'正在獲取第{page}頁')
            work_list = response['Data']['Posts']

            # 假如return的話，函數會中斷
            # return response
            # list會佔用內存
            # work_list.append()
            # 生成器有一個惰性加載機制，不調用不會生成數據，調用才會生成數據，可以節約內存
            yield work_list

    # 创建表
    def create_table(self):
        sql = """
            create table if not exists tx_work(
                id int primary key auto_increment,
                work_name varchar(100) not null,
                country_name varchar(50),
                city_name varchar(50),
                work_desc text
            );
        """
        try:
            self.cursor.execute(sql)
            print('表創建成功...')
        except Exception as e:
            print('表創建失敗:', e)

    # 数据录入
    def insert_work_info(self, *args):
        """
        :param args:
            id
            work_name
            country_name
            city_name
            work_desc
        :return:
        """
        sql = """
            insert into tx_work(
                id,
                work_name,
                country_name,
                city_name,
                work_desc
            ) values (%s, %s, %s, %s, %s);
        """
        try:
            self.cursor.execute(sql, args)
            self.db.commit()
            print('數據插入成功...')
        except Exception as e:
            print('數據插入失敗:', e)
            # 事务回滚
            self.db.rollback()
        # 当前数据库连接不能关闭, 第一页保存完成后还需要保存第二页
        # finally:
        #     self.db.close()

    def main(self):
        self.create_table()
        all_work_generator_object = self.get_work_info()
        # mysql中的主键是自增长的, 需要使用0占位主键位置让主键数据自动生成
        work_id = 0
        for work_info_list in all_work_generator_object:
            for work_info in work_info_list:
                work_name = work_info['RecruitPostName']
                country_name = work_info['CountryName']
                city_name = work_info['LocationName']
                work_desc = work_info['Responsibility']
                self.insert_work_info(work_id, work_name, country_name, city_name, work_desc)


if __name__ == '__main__':
    tx_work = TxWork()
    tx_work.main()

