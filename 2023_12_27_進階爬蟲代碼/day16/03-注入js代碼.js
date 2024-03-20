!(function () {
    if (window.flag) {
    } else {
        var websocket = new WebSocket('ws://127.0.0.1:8080');
        window.flag = true
        // 接受服务端发送过来的数据
        websocket.onmessage = function (event) {
            // 接受服务端发送过来的数据
            var data = event.data
            console.log(data);
            // 對數據進行解密
            var res = b(data)
            console.log(res);
            // 解密後再發送回python
            websocket.send(res)
        }
    }
}())