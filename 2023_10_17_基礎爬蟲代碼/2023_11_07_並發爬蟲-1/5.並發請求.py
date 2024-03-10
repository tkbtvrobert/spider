import asyncio
import aiohttp


# 协程函数中可以绑定回调函数
def print_result(task_obj):
    print('下載內容為:', task_obj.result())


async def baidu_spider():
    print('百度爬蟲...')
    url = 'https://www.baidu.com'
    # 注意 aiohttp.ClientSession() 有小括號
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            result = await response.text()
            return result


async def sogou_spider():
    print('搜狗爬蟲...')
    url = 'https://www.sogou.com'
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            result = await response.text()
            return result


async def jd_spider():
    print('京東爬蟲...')
    url = 'https://www.jd.com'
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            result = await response.text()
            return result


async def main():
    task_baidu = asyncio.create_task(baidu_spider())
    task_baidu.add_done_callback(print_result)

    task_sogou = asyncio.create_task(sogou_spider())
    task_sogou.add_done_callback(print_result)

    task_jd = asyncio.create_task(jd_spider())
    task_jd.add_done_callback(print_result)

    tasks = [task_baidu, task_sogou, task_jd]
    await asyncio.wait(tasks)


if __name__ == '__main__':
    asyncio.run(main())

"""
task对象在执行完毕之后可以使用add_done_callback调用指定的其他普通函数任务
"""