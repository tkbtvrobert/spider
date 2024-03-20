
var axios1 = require('axios')

// 请求拦截器
axios1.interceptors.request.use(function (config) {
    console.log('这个是请求拦截器')
    config.headers['sign'] = 'aksgfjkhsdhfjkgsdhjkfg'
    return config
})

// 响应拦截器
axios1.interceptors.response.use(function (response) {
    console.log('这个是响应拦截器')
    return response
})

// 发送请求
axios1.get('http://httpbin.org/get').then(function (res) {
    console.log(res.data)
})