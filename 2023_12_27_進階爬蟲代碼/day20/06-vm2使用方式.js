


var {VM, VMScript} = require('vm2')

// 转换js代码
var js_script = new VMScript('var a = 2; a')
// 创建虚拟环境
var vm = new VM()

console.log(vm.run(js_script))




