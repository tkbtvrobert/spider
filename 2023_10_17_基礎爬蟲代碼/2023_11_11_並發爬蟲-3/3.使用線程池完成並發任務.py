import requests
from lxml import etree
from concurrent.futures import ThreadPoolExecutor

url = 'https://movie.douban.com/top250?start={}&filter='

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                  'Chrome/119.0.0.0 Safari/537.36'
}


def get_movie_info(page):
    response = requests.get(url.format(page * 25), headers=headers)
    if response.status_code == 200:
        tree = etree.HTML(response.text)
        result = tree.xpath("//div[@class='hd']/a/span[1]/text()")
        print(result)
    else:
        print(response.status_code)


if __name__ == '__main__':
    with ThreadPoolExecutor(max_workers=5) as pool:
        for page in range(10):
            pool.submit(get_movie_info, page)