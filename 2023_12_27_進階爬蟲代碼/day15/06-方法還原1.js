
const parse = require('@babel/parser')
// 导入解析库
const traverse = require('@babel/traverse').default
const types = require('@babel/types') //检测数据类型
const generator = require('@babel/generator').default // ast还原成源 代码


js_code = `
function aa(bb, cc){
    return bb + cc
}
var bc = aa('\u0068\u0065\u006c\u006c\u006f','\u002c\u0041\u0053\u0054')
`

// 判断类型是是不是字面量
function isNodeLiteral(node) {
    if (Array.isArray(node)) {
        return node.every(ele => isNodeLiteral(ele));
    }
    if (types.isLiteral(node)) {
        if (node.value == null) {
            return false;
        }
        return true;
    }
    if (types.isBinaryExpression(node)) {
        return isNodeLiteral(node.left) && isNodeLiteral(node.right);
    }
    if (types.isUnaryExpression(node, {
        "operator": "-"
    }) || types.isUnaryExpression(node, {
        "operator": "+"
    })) {
        return isNodeLiteral(node.argument);
    }

    if (types.isObjectExpression(node)) {
        let {properties} = node;
        if (properties.length == 0) {
            return true;
        }

        return properties.every(property => isNodeLiteral(property));

    }
    if (types.isArrayExpression(node)) {
        let {elements} = node;
        if (elements.length == 0) {
            return true;
        }
        return elements.every(element => isNodeLiteral(element));
    }

    return false;
}

// 把代码转换成ast语法树
var ast = parse.parse(js_code)
const transform_literal = {
    FunctionDeclaration(path){
        // 當前節點和父類節點
        var {node, parentPath} = path
        var {body, id} = node
        if (!types.isReturnStatement(body.body[0])){
            return;
        }
        // parentPath.scope 用於獲取當前節點的作用域對象，然後 getBinding(id.name) 方法根據變量名稱 id.name 獲取這個變量的綁定信息。
        // 獲取與該標籤相關聯的綁定 找到調用的位置
        // 也就是找到 aa('\u0068\u0065\u006c\u006c\u006f','\u002c\u0041\u0053\u0054') 的位置
        var binding = parentPath.scope.getBinding(id.name)
        // 它將移除那些未被參考並且在頂層的變數定義
        if (!binding.referenced && parentPath.isProgram()){
            path.remove();
            return;
        }
        // 獲取到源代碼
        var js_code = path.toString()
        if (js_code.includes('try') || js_code.includes('random') || js_code.includes('Date')){
            // 如果值不確定不進行出來
            return;
        }
        // 把方法加載到環境變量中，此aa()是屬於語法樹裡面的方法
        eval(js_code)
        // console.log(aa('1', '2'));
        var canremove = true;
        // binding.referencePaths 獲取到調用的節點
        for (var i of binding.referencePaths){
            var {node, parentPath} = i;
            // 確保調用的方法是對的
            if(!parentPath.isCallExpression({'callee': node})){
                canremove = false;
                continue;
            }
            var argument = parentPath.node.arguments;
            if (argument.length == 0 || !isNodeLiteral(argument)){
                canremove = false;
                continue;
            }
            // console.log(parentPath.toString());
            var value = eval(parentPath.toString())
            console.log(value);
            parentPath.replaceWith(types.valueToNode(value))
        }
        canremove && path.remove();
    }
}

traverse(ast, transform_literal)

var {code} = generator(ast)
console.log(code)



