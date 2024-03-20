


const parse = require('@babel/parser')
// 导入解析库
const traverse = require('@babel/traverse').default
const types = require('@babel/types') //检测数据类型
const generator = require('@babel/generator').default // ast还原成源 代码


js_code = `
var d = true ? 1 : 2
`
// 把代码转换成ast语法树
var ast = parse.parse(js_code)
const _jy = {
    // 同時獲取多節點
    "BinaryExpression|UnaryExpression|ConditionalExpression"(path) {

        // 防止溢出
        if (path.isUnaryExpression({operator: "-"}) ||
            path.isUnaryExpression({operator: "void"})) {
            return;
        }
        // evaluate() 执行对应的代码,直接计算出结果
        console.log(path.evaluate())
        const {confident, value} = path.evaluate();
        if (!confident)
            return;
        if (typeof value == 'number' && (!Number.isFinite(value))) {
            return;
        }
        path.replaceWith(types.valueToNode(value));
    },
}

traverse(ast, _jy)

var {code} = generator(ast)
console.log(code)



