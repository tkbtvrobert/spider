"""
网址:https://ljgk.envsc.cn/

需求：获取到地址（address），公司名字（ps_name），创建的时间（create_time），将数据分别保存在json文件和csv表格
"""

import requests
import json
import csv


class LjgkEnvsc:
    def __init__(self):
        self.api_url = 'https://ljgk.envsc.cn/OutInterface/GetPSList.ashx?regionCode=0&psname=&SystemType' \
                       '=C16A882D480E678F&sgn' \
                       '=f36caa6317b7a0191a01a150a646fbdc4dabdaec&ts=1701341557220&tc=64760196'

        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                          'Chrome/119.0.0.0 Safari/537.36'
        }

    def get_company_info(self):
        response = requests.get(self.api_url, headers=self.headers).json()
        return response

    @staticmethod
    def save_json(response):
        company_list = list()
        for temp in response:
            item = dict()
            item['ps_name'] = temp['ps_name']
            item['address'] = temp['address']
            item['create_time'] = temp['create_time']
            company_list.append(item)

        # print(company_list)

        with open('company_info.json', 'w', encoding='utf-8') as f:
            f.write(json.dumps(company_list, indent=4, ensure_ascii=False))

    @staticmethod
    def save_csv(response):
        with open('company_info.csv', 'w', encoding='utf-8', newline='') as f:
            field_name = ['ps_name', 'address', 'create_time']
            f_csv = csv.DictWriter(f, fieldnames=field_name)
            f_csv.writeheader()

            for temp in response:
                item = dict()
                item['ps_name'] = temp['ps_name']
                item['address'] = temp['address']
                item['create_time'] = temp['create_time']
                f_csv.writerow(item)

    def main(self):
        response = self.get_company_info()
        self.save_json(response)
        self.save_csv(response)


if __name__ == '__main__':
    je = LjgkEnvsc()
    je.main()
