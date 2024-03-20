

const parse = require('@babel/parser')
// 导入解析库
const traverse = require('@babel/traverse').default
const types = require('@babel/types') //检测数据类型
const generator = require('@babel/generator').default // ast还原成源 代码


js_code = `
var a = 0x25,b = 0b10001001,c = 0o123456,
d = "\x68\x65\x6c\x6c\x6f\x2c\x41\x53\x54",
e = "\u0068\u0065\u006c\u006c\u006f\u002c\u0041\u0053\u0054";
`
// 把代码转换成ast语法树
var ast = parse.parse(js_code)
const transform_literal = {
    // {node} = path.nod
    NumericLiteral({node}) {
        // js 正则表达式
        if (node.extra && /^0[obx]/i.test(node.extra.raw)) {
            node.extra = undefined;
        }
    },
    StringLiteral({node}) {
        if (node.extra && /\\[ux]/gi.test(node.extra.raw)) {
            node.extra = undefined;
        }
    },
}

traverse(ast, transform_literal)

var {code} = generator(ast)
console.log(code)



