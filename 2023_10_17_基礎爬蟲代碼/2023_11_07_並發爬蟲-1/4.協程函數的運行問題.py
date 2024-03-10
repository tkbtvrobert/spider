import asyncio


async def work():
    print(1)
    await asyncio.sleep(1)
    print(2)


async def main():
    # 协程函数必须使用await进行调度
    await work()


asyncio.run(main())
