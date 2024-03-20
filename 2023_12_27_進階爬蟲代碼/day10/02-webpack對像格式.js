// webpack格式
// !function (e) {
//         加载器
// }(接收的参数)


!function (e) {
    // 加载器
    function n(t) {
        return e[t].call()
    }

    n('aa')
}({
    'aa': function () {
        console.log('123')
    },
    'bb': function () {
        console.log('456')
    },
    'cc': function () {
        console.log('345')
    }
})



