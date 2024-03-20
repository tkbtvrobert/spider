
const  parse = require('@babel/core')

jscode = `var a = "\u0068\u0065\u006c\u006c\u006f\u002c\u0041\u0053\u0054";`

// 把JS代碼转換成對應的ast语法树
var ast = parse.parse(jscode);
// 打印語法樹
console.log(JSON.stringify(ast, null, '\t'));