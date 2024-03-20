

const parse = require('@babel/parser')
// 导入解析库
const traverse = require('@babel/traverse').default

jscode = `var a = "\u0068\u0065\u006c\u006c\u006f\u002c\u0041\u0053\u0054";`

// 把js代码转换成对应的ast语法树
var ast = parse.parse(jscode);

// 用来定位/操作节点(ast/树结构, 访问器对象)
traverse(ast, {
    // 定位VariableDeclarator类型, path是定位之后的地址
    VariableDeclarator(path){
        // 获取path 下面的node节点
        console.log('当前节点的数据', path.node.init.value)
    }
})



// 打印语法树
// console.log(JSON.stringify(ast, null, '\t'))





