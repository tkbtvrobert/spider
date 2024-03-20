// webpack格式
// !function (e) {
//     加載器
// }(接收的參數)

// 这个格式就是webpack
!function (e) {
    // 存放加载器
    var c = {}

    // 加載器 名字一般叫做n
    function n(t) {
        if (c[t])
            return c[t].exports;
        // 創建了a對象
        var a = c[t] = {
            // 表示模塊的標示符
            i: t,
            // 布爾值，初始為false，用來標示當前模塊是否加載
            l: !1,
            // 空對象，用於將模塊導出存儲
            exports: {}
        };
        // 執行函數裡面的代碼
        return e[t].call(a.exports, a, a.exports, n),
            a.l = !0,
            a.exports
    }

    n.m = e
    // 入口
    n(2)
}([
    // 存放模块
    function () {
        console.log('负责登陆')
    },
    function () {
        console.log('负责注册')
    },
    function () {
        console.log('负责注册')
    }
])

