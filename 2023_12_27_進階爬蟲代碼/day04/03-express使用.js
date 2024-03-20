
// 导入模块
var express = require('express')

// 创建一个web服务器
var app = express();

function encrypt(cc) {
    return cc + 1234
}

// get请求  www.baidu.com/user
// req是请求对象  res响应对象
app.get('/user', function (req, res) {
    // req.query 获取到请求参数
    // console.log(req.query);
    result = encrypt(req.query.aa)
    res.send(result)
})

// app.get('/', function (req, res) {
//     res.send('這個是根路徑')
// })

// post请求
// 指定参数类型  接受的数据类型
app.use(express.json())
app.post('/api', function (req, res) {
    console.log(req.body);
    res.send('這個是post請求之後的加密數據')
})

app.post('/api1', function (req, res) {
    console.log(req.body)
    res.send('这个是post请求之后的加密数据')
})

app.post('/api3', function (req, res) {
    console.log(req.body)
    res.send('这个是post请求之后的加密数据')
})

// 启动服务
app.listen(8080, function () {
    console.log('打开服务ip和端口是:http://127.0.0.1:8080')
})