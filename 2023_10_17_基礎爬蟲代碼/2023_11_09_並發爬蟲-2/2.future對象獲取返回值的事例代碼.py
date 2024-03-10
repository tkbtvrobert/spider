import asyncio


async def work():
    print(1)
    await asyncio.sleep(1)
    print(2)
    return 123


# loop = asyncio.get_event_loop()
# future = asyncio.ensure_future(work())
# print(future)


async def main():
    res = await asyncio.ensure_future(work())
    print(res)

asyncio.run(main())
"""
task任务与future任务必须使用await关键字调度运行才行
"""
