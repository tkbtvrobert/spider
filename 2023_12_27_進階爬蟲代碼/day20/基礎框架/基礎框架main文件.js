// 砂箱的目的就是想使用node环境 又不想被网站检测
const {VM,VMScript} = require('vm2');
const vm = new VM();
const fs = require('fs')
const {read} = require('./env/main')  // 环境相关的代码
const {readJsCode} = require('./JsCode/main')  // 需要操作的JS代码

let jscode = "";

jscode += read()

jscode += readJsCode()
console.log(jscode)
const script = new VMScript(jscode);
console.log(vm.run(script));