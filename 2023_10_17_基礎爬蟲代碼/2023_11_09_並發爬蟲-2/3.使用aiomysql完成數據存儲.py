import asyncio
import aiomysql


async def conn_mysql():
    # 异步上下文管理器
    async with aiomysql.connect(host='localhost', port=3306, user='root', password='root', db='py_spider') as conn:
        # 連接對象創造一個游標對象
        async with conn.cursor() as cursor:
            # 完成一張表的查詢
            await cursor.execute('select * from ali_work;')
            # 獲取表的結果
            # 如果不加await返回的是一个Future对象，否則拿不到返回值
            result = await cursor.fetchall()
            print(result)

asyncio.run(conn_mysql())