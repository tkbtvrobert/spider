

const parse = require('@babel/parser')
// 导入解析库
const traverse = require('@babel/traverse').default

jscode = `var a = "\u0068\u0065\u006c\u006c\u006f\u002c\u0041\u0053\u0054";
var a = "\u0068\u0065\u006c\u006c\u006f\u002c\u0041\u0053\u0054";
`

// 把js代码转换成对应的ast语法树
var ast = parse.parse(jscode);

// 用来定位/操作节点(ast/树结构, 访问器对象)
traverse(ast, {
    // 定位VariableDeclarator类型, path是定位之后的地址
    VariableDeclarator(path){
        // console.log('当前节点的数据', path.node.init.value) // 只获取一个数据
        // console.log(path.node) // 获取path 下面的node节点
        // console.log(path.toString()); // 获取当前路径的源代码
        // console.log(path.parentPath)  // 获取当前path下面的父节点，也就是上一層
        // console.log(path.container);   // 获取兄弟节点   包含自身
        // console.log(path.type);  // 获取节点类型
        // console.log(path.get('init')) // 获取path的子路径
        // path.stop() // 找到第一个后，可以停止遍历
        // path.replaceWith('123') // (单)节点替换函数
    }
})



// 打印语法树
// console.log(JSON.stringify(ast, null, '\t'))





