"""
要求：通过异步的方式获取到英雄联盟官网的英雄皮肤图片

网址：https://101.qq.com/#/hero

aiohttp.client_exceptions.ServerDisconnectedError: Server disconnected 解決方法
https://blog.csdn.net/zhb_feng/article/details/118081444
"""
import os
import asyncio
import aiohttp
import aiofile


class HeroSkin:
    def __init__(self):
        self.url = 'https://101.qq.com/#/hero'
        self.hero_list_url = 'https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js'
        self.skin_url = 'https://game.gtimg.cn/images/lol/act/img/skin/big_{}.jpg'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                          'Chrome/119.0.0.0 Safari/537.36'
        }

    async def get_image_content(self, session, name, instance_id):
        async with session.get(self.skin_url.format(instance_id), headers=self.headers) as response:
            if response.status == 200:
                content = await response.read()
                async with aiofile.async_open('./images/' + name + '.jpg', mode='wb') as f:
                    await f.write(content)
                    print('保存成功:', name)
            else:
                pass

    async def main(self):
        tasks = list()
        connector = aiohttp.TCPConnector(limit=50)
        async with aiohttp.ClientSession(connector=connector) as session:
            async with session.get(self.hero_list_url, headers=self.headers) as response:
                result = await response.json(content_type=None)
                # print(result['hero'])
                for item in result['hero']:
                    name = item['name']
                    instance_id = item['instance_id']
                    coro_obj = self.get_image_content(session, name, instance_id)
                    tasks.append(asyncio.create_task(coro_obj))
                await asyncio.wait(tasks)


if __name__ == '__main__':
    if not os.path.exists('./images'):
        os.mkdir('./images')

    hero_skin = HeroSkin()
    asyncio.run(hero_skin.main())