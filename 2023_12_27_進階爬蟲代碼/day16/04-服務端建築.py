# encoding: utf-8
import asyncio
import websockets
import requests
import time
import json


def get_data(page):
    headers = {
        "v": "231012",
        "Referer": "https://jzsc.mohurd.gov.cn/data/company",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
    }

    url = "https://jzsc.mohurd.gov.cn/APi/webApi/dataservice/query/comp/list"
    params = {
        "pg": page,
        "pgsz": "15",
        "total": "450"
    }
    response = requests.get(url, headers=headers, params=params)
    # print(response.text)
    return response.text

async def echo(websocket):
    for i in range(1, 10):
        data = get_data(i)
        await websocket.send(data)

async def recv_msg(websocket):
    while 1:
        text = await websocket.recv()
        print(text)

async def main_(websocket, path):
    await echo(websocket)
    await recv_msg(websocket)

server = websockets.serve(main_, '127.0.0.1', 8080)
loop = asyncio.get_event_loop()
loop.run_until_complete(server)
loop.run_forever()

