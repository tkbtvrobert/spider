!(function () {
    'use strict';

    var client = new SekiroClient("ws://127.0.0.1:5620/business-demo/register?group=rpc_jrtt&clientId=" + Math.random());

    client.registerAction("tt", function (request, resolve, reject) {
        // 取對應的參數data，接收python傳的地址
        var url = request['url']
        if(!url){
            reject('url 不能為空')
        }
        // 發送解密後的數據方法
        resolve({'signature': window.byted_acrawler.sign({url})});
    })
}())