
// 组合配置项
const fs = require('fs')

const files = [
    // 导入所有bom相关的JS文件
    'doc.js',
]


function readBOMJsCode(){
    let jsCode = "";
    // 返回需要运行的代码
    for (let i=0; i< files.length;i++){
        // 这个路径需要使用绝对路径
        jsCode += fs.readFileSync(__dirname + "\\" + files[i]).toString() + ";\r\n";
    }
    return jsCode;
}

module.exports = {
    readBOMJsCode,
}

