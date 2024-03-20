

function main(){
    var toString = Object.prototype.toString;
    if (toString.apply(document.createElement).indexOf('native code') ) {
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

main()
