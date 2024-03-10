import time
import pymysql
import requests
from concurrent.futures import ThreadPoolExecutor

"""
多線程可以自己分配任務較靈活
線程池無法自己分配
"""


class BaiDuWork:
    def __init__(self):
        self.db = pymysql.connect(host='localhost', user='root', password='root', db='py_spider')
        self.cursor = self.db.cursor()
        self.api_url = 'https://talent.baidu.com/httservice/getPostListNew'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                          'Chrome/119.0.0.0 Safari/537.36',
            'Cookie': 'BAIDUID=6CD59DC7C9B42B73C17048401980628F:FG=1; BAIDUID_BFESS=6CD59DC7C9B42B73C17048401980628F:'
                      'FG=1; BDUSS=3BYWnFiZXpQQXdKZmtHZm9TLU4wZGs4YnR5NGZyUXBlWEs2bHVDWGZ1cGVpRTFsSVFBQUFBJCQAAAAAAAA'
                      'AAAEAAACeRULE57PR5rvD0akAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
                      'AAAAF77JWVe-yVlQ; BDUSS_BFESS=3BYWnFiZXpQQXdKZmtHZm9TLU4wZGs4YnR5NGZyUXBlWEs2bHVDWGZ1cGVpRTFsS'
                      'VFBQUFBJCQAAAAAAAAAAAEAAACeRULE57PR5rvD0akAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
                      'AAAAAAAAAAAAAAAAAAAAAAF77JWVe-yVlQ; BIDUPSID=6CD59DC7C9B42B73C17048401980628F; PSTM=1698934496'
                      '; ZFY=qPfiWnhIzf:B7QOx8zFOKSNSOCmeA2HmLejLMp:BynUOI:C; H_WISE_SIDS=110085_265881_263619_275732'
                      '_259642_256739_274948_278414_279702_281190_281810_281895_280650_275098_282193_282435_282520_28'
                      '2571_282604_282626_282010_280272_282848_253022_282938_282969_282402_236312_283169_283207_28199'
                      '5_283354_283222_251972_283364_283497_283631_283661_281704_281052_283723_282887_256223_279613_2'
                      '83873_283867_283782_283898_203518_283924_283922_283960_283887_284024_283976_278388_284101_2839'
                      '44_276768_284197_273242_284280_284286_284263_284205_281182_283357_276311_276929_284470_281864_'
                      '267074_284578_284690_269893_280722; PSINO=7; H_WISE_SIDS_BFESS=110085_265881_263619_275732_259'
                      '642_256739_274948_278414_279702_281190_281810_281895_280650_275098_282193_282435_282520_282571'
                      '_282604_282626_282010_280272_282848_253022_282938_282969_282402_236312_283169_283207_281995_28'
                      '3354_283222_251972_283364_283497_283631_283661_281704_281052_283723_282887_256223_279613_28387'
                      '3_283867_283782_283898_203518_283924_283922_283960_283887_284024_283976_278388_284101_283944_2'
                      '76768_284197_273242_284280_284286_284263_284205_281182_283357_276311_276929_284470_281864_2670'
                      '74_284578_284690_269893_280722; Hm_lvt_50e85ccdd6c1e538eb1290bc92327926=1700881955; RT="z=1&dm'
                      '=baidu.com&si=7c0bf103-a459-4854-9f5b-ff6c906731d5&ss=lpdh6sm2&sl=1&tt=gsm&bcn=https%3A%2F%2Ff'
                      'clog.baidu.com%2Flog%2Fweirwood%3Ftype%3Dperf"; Hm_lpvt_50e85ccdd6c1e538eb1290bc92327926=17008'
                      '81997',
            'Referer': 'https://talent.baidu.com/jobs/social-list?search=python'
        }

    def __del__(self):
        self.cursor.close()
        self.db.close()

    # 獲取數據
    def get_work_info(self, page):
        post_data = {
            'recruitType': 'SOCIAL',
            'pageSize': '10',
            'keyWord': 'python',
            'curPage': page,
            'projectType': ''
        }
        response = requests.post(self.api_url, headers=self.headers, data=post_data)
        return response

    def parse_work_info(self, response):
        work_list = response.json()['data']['list']
        for work_info in work_list:
            education = work_info['education'] if work_info['education'] else '空'
            name = work_info['name']
            service_condition = work_info['serviceCondition']
            self.save_work_info(education, name, service_condition)

    def create_table(self):
        sql = """
            create table if not exists baidu_work_pool(
                id int primary key auto_increment,
                education varchar(200),
                name varchar(100),
                service_condition text
            );
        """
        try:
            self.cursor.execute(sql)
            print('表創建成功...')
        except Exception as e:
            print('表創建失敗:', e)

    def save_work_info(self, education, name, service_condition):
        sql = """
            insert into baidu_work_pool(id, education, name, service_condition) value (
                %s, %s, %s, %s
            )
        """
        try:
            self.cursor.execute(sql, (0, education, name, service_condition))
            self.db.commit()
            print('數據保存成功...')
        except Exception as e:
            print('數據保存失敗', e)
            self.db.rollback()

    def main(self):
        self.create_table()
        with ThreadPoolExecutor(max_workers=5) as pool:
            future_list = list()
            for page in range(1, 6):
                response = pool.submit(self.get_work_info, page)
                future_list.append(response)

            for item in future_list:
                # result 才是真正的請求對象
                # 主線程執行的，因為沒放進線程池
                self.parse_work_info(item.result())


if __name__ == '__main__':
    baidu_work = BaiDuWork()
    baidu_work.main()
