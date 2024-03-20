

document = {}
document.createElement = function(){}
document.createElement.toString = function(){
    return 'function createElement() { [native code] }'
}

console.log(document.createElement.toString());


// // 补方法原型
// var Document = function Document() {}
// // Object.defineProperty  给对象定义新的属性
// Object.defineProperty(Document.prototype, 'createElement', {
//     "writable": true,
//     "enumerable": true,
//     "configurable": true,
//     'value': function createElement() {
//         `[native code]`
//     }
// })
//
// HTMLDocument  = function HTMLDocument() {}
// // 将指定的对象的原型设置为另一个对象
// Object.setPrototypeOf(HTMLDocument.prototype, Document.prototype)
// document = new HTMLDocument()
//
// // console.log(Object.getOwnPropertyDescriptor(document.__proto__.__proto__, 'createElement'))
//
// console.log(document.createElement.toString());







