import websockets
import asyncio

async def echo(websocket):
    text = 'hello world'
    await websocket.send(text)

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