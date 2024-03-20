// 定义函数
// function test(){
//     console.log('hello world')
// };

// 调用函数
// test();


// 定义带参数的函数
// function test1(aa, bb) {
//     var cc = aa + bb
//     console.log(cc)
//
// }
// test1(3, 4)

// 和python的区别 js   arguments可以用来接收参数
// function test1() {
//     // console.log('111')
//     console.log(arguments['0']);
//
// }
// test1(3, 4)

// js 自执行方法  内部函数外部调用
// var aa;
// !(function () {
//     function test() {
//         console.log('hell')
//     }
//     aa = test;
//     console.log('world')
// })()
//
// aa()

// 返回数据   1. 返回函数中的值   执行完return程序结束
function test() {
    return 123,
        234,
        345;
}

console.log(test());