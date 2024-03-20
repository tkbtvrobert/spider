

// var navigator = {}
// navigator.userAgent = '1232345453'
// // 原型检测
// console.log(Object.getOwnPropertyDescriptor(navigator, 'userAgent'));


// 检测原型补属性
// var navigator = {}
// // 补隐式原型
// navigator.__proto__.userAgent = '"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"\n'
// console.log(Object.getOwnPropertyDescriptor(navigator, 'userAgent'));
// console.log(navigator.__proto__);


// 补显示原型
// var Navigator = function () {}
// Navigator.prototype = {'userAgent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"}
// var navigator = new Navigator()
//
//
// console.log(Object.getOwnPropertyDescriptor(navigator, 'userAgent'))
// console.log(navigator.userAgent)


// 尝试jsdom
// var jsdom = require('jsdom')
// var  {JSDOM} = jsdom;
// var dom = new JSDOM(`<!DOCTYPE html><p>hello world</p>`)
// // window = dom.window
// navigator = dom.window.navigator
// console.log(Object.getOwnPropertyDescriptor(navigator, 'userAgent'))

















