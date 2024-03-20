


const parse = require('@babel/parser')
// 导入解析库
const traverse = require('@babel/traverse').default
const types = require('@babel/types') //检测数据类型
const generator = require('@babel/generator').default // ast还原成源 代码


js_code = `
navigator["\x75\x73"+"\x65\x72"+"\x41\x67"+"\x65\x6e"+"\x74"];
function _xl(){
 x = 1 + 2 + 3 +4 + 5 + 6 + 7
}
`
// 把代码转换成ast语法树
var ast = parse.parse(js_code)
const _jy = {
    'BinaryExpression'(path){
        // console.log(path.evaluate())
        var {confident, value} = path.evaluate()
        // && 是 JavaScript 中的邏輯與運算符，當左邊的操作數為真時，返回右邊的操作數；否則，返回左邊的操作數。
        confident && path.replaceWith(types.valueToNode(value))

    }
}

traverse(ast, _jy)

var {code} = generator(ast)
console.log(code)



