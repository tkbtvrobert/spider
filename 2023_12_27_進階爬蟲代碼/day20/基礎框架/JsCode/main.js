
// 组合配置项
const fs = require('fs')

const files = [
'需要执行的js代码.js',
]

function readJsCode(){
    let jsCode = "";
    // 返回需要运行的代码
    for (let i=0; i< files.length;i++){
        // 这个路径需要使用绝对路径
        jsCode += fs.readFileSync(__dirname + "\\" + files[i]).toString() + ";\r\n";
    }
    return jsCode;

}

module.exports = {
    readJsCode,
}




