const parse = require('@babel/parser')
// 导入解析库
const traverse = require('@babel/traverse').default
// 检测数据类型
const types = require('@babel/types')
// ast还原成源 代码
const generator = require('@babel/generator').default

js_code = `
var arr = '3,4,0,5,1,2'['split'](',')
`
// 把代码转换成ast语法树
var ast = parse.parse(js_code)

traverse(ast, {
    CallExpression(path){
        var {callee, arguments} = path.node
        var data = callee.object.value
        var func = callee.property.value
        var arg = arguments[0].value
        console.log(data, func, arg);

        var res = data[func](arg)
        console.log(res);

        path.replaceWith(types.valueToNode(res))
    }
})

var {code} = generator(ast)
console.log(code);