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
// document.createElement.to


function main(){
    var toString = Object.prototype.toString;
    if (toString.apply(document.createElement).indexOf('native code') != -1 ) {
        // 检测描述符
        var descriptor = Object.getOwnPropertyDescriptor(document.__proto__.__proto__, 'createElement');
        if(descriptor && descriptor.writable && descriptor.configurable && descriptor.enumerable) {
             return '环境通过'
          }else {
            return '描述符环境失败'
        }
    }else {
        return 'toString环境失败'
    }
}

console.log(main());
