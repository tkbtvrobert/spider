


//
// var aa = '123'   // proxy   请求拦截器
//
// aa = '234'


// 给定对象
// var target = {
//     name: 'JACK',
//     age: 18,
// };
//
//
// p = new Proxy(target, {
//     // 重对象中进行取值的操作
//     get: function (target, propertyKey, receiver) {
//         // 1. 拦截的对象
//         // 2. 访问的属性
//         // 3. 代理对象的本身
//         // console.log(target, proper, receiver)
//         temp = Reflect.get(target, propertyKey, receiver)
//         console.log(`对象${target}--> get了属性--> ${propertyKey} 值是--> ${temp}`);
//         return temp
//     },
//     set: function (target, p, value, receiver) {
//         temp = Reflect.set(target,p, value,receiver)
//         console.log("set: ", target, p, target[p]);
//         // console.log(target, p, value, receiver)
//         return temp
//
//     }
// })
// // 获取数据   get
// // p.age
// p.aaa = '123'
// console.log(p.aaa)
//
// // console.log(p.age);



// 代理封装成函数
// 目标对象（被代理对象）
// var target = {
//     name: 'JACK',
//     age: 18,
//     lili:{
//         zs:'nana'
//
//     }
// };
//
// function XlProxy(obj,name){
//     return new Proxy(obj,{
//         get(target, p, receiver) {
//             temp = Reflect.get(target,p,receiver)
//             console.log(`对象${name}--> get了属性--> ${p} 值是--> ${temp}`);
//          	if (typeof temp == 'object'){
//                  // 对于对象套对象进行挂代理
//                  temp = XlProxy(temp,name + '-->' + p)
//             }
//             return temp
//         }
//     })
// }
// sss = XlProxy(target,'target')
// sss.name
// sss.lili.zs



// 补环境脚本
// 代理器封装
function get_enviroment(proxy_array) {
    for(var i=0; i<proxy_array.length; i++){
        handler = '{\n' +
            '    get: function(target, property, receiver) {\n' +
            '        console.log("方法:", "get  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return target[property];\n' +
            '    },\n' +
            '    set: function(target, property, value, receiver) {\n' +
            '        console.log("方法:", "set  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return Reflect.set(...arguments);\n' +
            '    }\n' +
            '}'
        eval('try{\n' + proxy_array[i] + ';\n'
        + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}catch (e) {\n' + proxy_array[i] + '={};\n'
        + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}')
    }
}
proxy_array = ['window', 'document', 'location', 'navigator', 'history','screen']
get_enviroment(proxy_array)

