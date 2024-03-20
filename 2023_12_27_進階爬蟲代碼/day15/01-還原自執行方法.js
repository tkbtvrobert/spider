const parse = require('@babel/parser')
// 导入解析库
const traverse = require('@babel/traverse').default
// 检测数据类型
const types = require('@babel/types')
// ast还原成源 代码
const generator = require('@babel/generator').default

js_code = `
!(function (){
    console.log('123')
})
`
// 把代码转换成ast语法树
var ast = parse.parse(js_code)

traverse(ast, {
    // path 定位的节点
    // 為什麼要選擇UnaryExpression，因為operator: "!"，也就是從!開始的外層
    UnaryExpression(path){
        var {argument} = path.node
        // console.log(argument);
        // 判斷當前類型是否為FunctionExpression，不是就退出
        if (!types.isFunctionExpression(argument)){
            return;
        }
        var {id, body, params} = argument;
        // 自執行方法，通常id為null，params中沒東西
        if (!id == null || params.length != 0){
            return;
        }
        // replaceWithMultiple 多节点替换函数，调用方式
        // 子節點替換父節點，替換多節點
        path.replaceWithMultiple(body.body)
    }
})

var {code} = generator(ast)
console.log(code);