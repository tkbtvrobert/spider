
function aa(bb, cc){
    return bb + cc
}

var bc = aa('\u0068\u0065\u006c\u006c\u006f','\u002c\u0041\u0053\u0054')
console.log(bc);

var bc = 'hello, AST'

var aa = ['12', '123', '1234']

// for .. in 獲取是下標
for (var i in aa){
    console.log(i);
}

// for .. of 獲取是值
for (var i of aa){
    console.log(i);
}