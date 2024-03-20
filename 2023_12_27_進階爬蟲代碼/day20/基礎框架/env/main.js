

const {readDOMJsCode} = require('./DOM/config');
const {readBOMJsCode} = require('./BOM/config');

function read(){
    let jsCode = '';

    jsCode += readBOMJsCode() // 加载BOM对象

    jsCode += readDOMJsCode()

    return jsCode

}

module.exports = {
    read,
}
