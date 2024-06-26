import os
import aiofile
import aiohttp
import asyncio

"""
1.在首页中通过抓包的形式发现了一个名为hreolist.json的文件, 在文件中存储了英雄的对应编号
    https://pvp.qq.com/web201605/js/herolist.json

2.进入到某一个英雄详情页,通过抓包的形式可以获取到这个英雄的其中一个皮肤图片的地址
    https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/105/105-bigskin-3.jpg
    105是当前这个英雄的编号, -3是当前这个英雄的皮肤编号

3.从json中获取英雄编号, 对皮肤路径做拼接, 并访问新的皮肤图片地址, 使用异步的方式完成文件读写
"""


class HeroSkin:
    def __init__(self):
        self.json_url = 'https://pvp.qq.com/web201605/js/herolist.json'
        self.skin_url = 'https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/{}/{}-bigskin-{}.jpg'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                          'Chrome/119.0.0.0 Safari/537.36'
        }

    async def get_image_content(self, session, e_name, c_name):
        # 因為不確定每個英雄皮膚個數
        for skin_id in range(1, 30):
            async with session.get(self.skin_url.format(e_name, e_name, skin_id), headers=self.headers) as response:
                if response.status == 200:
                    content = await response.read()
                    # 異步的去打開文件
                    async with aiofile.async_open('./images/' + c_name + '-' + str(skin_id) + '.jpg', mode='wb') as f:
                        await f.write(content)
                        print('保存成功:', c_name)
                else:
                    break

    async def main(self):
        tasks = list()
        async with aiohttp.ClientSession() as session:
            async with session.get(self.json_url, headers=self.headers) as response:
                # content_type=None 不寫會報錯，在 JSON 內容類型傳遞 None
                result = await response.json(content_type=None)
                # print(result)
                for item in result:
                    e_name = item['ename']
                    c_name = item['cname']
                    coro_obj = self.get_image_content(session, e_name, c_name)
                    tasks.append(asyncio.create_task(coro_obj))
                # 放進 for 迴圈就會變成同步，無法切換
                await asyncio.wait(tasks)


if __name__ == '__main__':
    if not os.path.exists('./images'):
        os.mkdir('./images')

    hero_skin = HeroSkin()
    asyncio.run(hero_skin.main())
