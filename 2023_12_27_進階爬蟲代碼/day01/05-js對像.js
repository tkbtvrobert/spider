


// 字面量方式创建对象
// var obj = {
//     name: '柏汌',
//     age: 18,
//     sex: '男',
//     hello: function () {
//         console.log('hello world')
//     }
// }
//
// // 调用对象属性和方法
// console.log(obj.name);
// obj.hello()


// 通过new Object创建对象  创建一个空的
// var obj = new Object()
// obj.name = '安娜'
// obj.age = '28'
// obj.sex = '女'
// obj.hello = function () {
//     console.log('你好')
// }
//
// console.log(obj.name);
// obj.hello()


// 构造函数
// function start(name, age, sex) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
//     this.hello = function () {
//         console.log('hello world')
//     }
// }
//
//
//
//
// var ldh = new start('刘德华', '53', '男')
// console.log(ldh.name);
// ldh.hello()


// 类
// class aa {
//     constructor(name, age, sex) {
//         this.name = name
//         this.age = age
//         this.sex = sex
//     }
//     hello = function () {
//         console.log('hello')
//     }
// }
//
// a = new aa('柏汌', 18, '男')
// a.hello()