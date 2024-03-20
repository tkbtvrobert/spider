Document = function Document(){}
// Object.defineProperty 直接在一个对象上定义一个新属性，或修改其现有属性，并返回此对象。
Object.defineProperty(Document.prototype,'createElement',{
    configurable: true,
    enumerable: true,
    value: function createElement(){},
    writable: true,
})
HTMLDocument = function HTMLDocument(){}
//可以将一个指定对象的原型（即内部的隐式原型属性）设置为另一个对象
Object.setPrototypeOf(HTMLDocument.prototype,Document.prototype)
document = new HTMLDocument()