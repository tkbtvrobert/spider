import asyncio
from aiohttp import ClientSession

url = 'https://www.baidu.com'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                  'Chrome/119.0.0.0 Safari/537.36'
}


async def get_baidu():
    # 通过上下文管理器创建请求对象
    # 注意 aiohttp.ClientSession() 有小括號
    # 使用完畢 async with 會把 session 請求對象關閉
    async with ClientSession() as session:
        # 使用完畢 async with 會把 response 請求對象關閉
        async with session.get(url, headers=headers) as response:
            """
            为什么当前response.text()需要进行await调度？
                在源码中发现响应对象中的text是一个协程函数, 协程函数运行需要使用await进行调度
            
            await 使用在耗時任務，何謂耗時也就是IO操作，Input 是寫，Output 是讀
                讀轉成文本，寫到內存中
            """
            result = await response.text()
            print(result)


if __name__ == '__main__':
    asyncio.run(get_baidu())

"""
1.当前请求对象是使用aiohttp构造的, 需要使用异步上下文管理器来创建请求对象并管理请求对象的关闭
2.当前响应对象是由请求对象创建的, 同理: 响应对象也是需要通过上下文管理器进行关闭
3.当前aiohttp中的响应对象要获取文本数据使用的是协程函数：async def text()...
    这个函数因为是协程函数所以需要await进行任务调度
"""
