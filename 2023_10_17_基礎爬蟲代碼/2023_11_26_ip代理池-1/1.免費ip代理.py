import json
import requests
from lxml import etree


class FreeAgent:
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                      'Chrome/119.0.0.0 Safari/537.36'
    }

    @classmethod
    def get_ip(cls, page):
        url = f'https://proxy.ip3366.net/free/?action=china&page={page}'
        response = requests.get(url, headers=cls.headers).text
        # print(response)

        tree = etree.HTML(response)
        tr_list = tree.xpath('//tbody/tr')

        for tr in tr_list:
            ip_dict = dict()
            ip_dict['ip'] = tr.xpath('./td[1]/text()')[0]
            ip_dict['port'] = tr.xpath('./td[2]/text()')[0]
            yield ip_dict

    def test_ip(self, max_page_num):
        for page_num in range(1, max_page_num + 1):
            for result in self.get_ip(page_num):
                proxies = {
                    'http': 'http://' + result['ip'] + ':' + result['port'],
                    'https': 'https://' + result['ip'] + ':' + result['port'],
                }
                try:
                    response = requests.get('http://httpbin.org/ip', headers=self.headers, proxies=proxies, timeout=3)
                    if response.status_code == 200:
                        print(response.text)
                        with open('success_ip.txt', 'a', encoding='utf-8') as f:
                            f.write(json.dumps(proxies, ensure_ascii=False, indent=4) + '\n')
                    else:
                        print('狀態碼異常...')
                except Exception as e:
                    print('請求超時:', e)


if __name__ == '__main__':
    free_agent = FreeAgent()
    free_agent.test_ip(8)
