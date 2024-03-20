const parse = require('@babel/parser')
// 导入解析库
const traverse = require('@babel/traverse').default
// 检测数据类型
const types = require('@babel/types')
// ast还原成源 代码
const generator = require('@babel/generator').default

// JS 转 ast语法树
jscode = `var b = 1 + 2;
var c = "coo" + "kie";
var a = 1+1,b = 2+2;
var c = 3;
var d = "1" + 1;
var e = 1 + '2';
`
// parser庫 -- JS 轉 ast語法樹
var ast = parse.parse(jscode)

// traverse庫 -- 查找定位ast語法的節點，遍歷它們進行操作
// traverse(ast, 訪問器對象)，即 traverse(ast, {類別(path){對path屬性的操作}}
traverse(ast, {
    BinaryExpression(path){
         // 取節點的個別內容
        var {left, operator, right} = path.node;
        // console.log(left, operator, right)
        // 判斷類型
        if(types.isNumericLiteral(left) && types.isNumericLiteral(right) && operator == '+' || types.isStringLiteral(left) && types.isStringLiteral(right)) {
            var aa = left.value + right.value
            console.log(aa)
            // types.valueToNode 得出值的类型是什么 值是什么
            console.log(types.valueToNode(aa))
            // 把节点的数据换成计算之后的值，也就是把原本數據更新成處裡後的數據
            // 替換單節點
            path.replaceWith(types.valueToNode(aa))
        }
    }
})
// 原碼
// console.log(generator(ast));
// 拆包，ast還原成JS代碼
var {code, decodedMap} = generator(ast)
// console.log(code, decodedMap)