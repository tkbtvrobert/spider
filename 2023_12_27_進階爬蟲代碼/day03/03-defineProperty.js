// user = {
//     age: '123'
// }
//
// aa = user.age
//
// // 静态方法会直接在一个对象上定义一个新属性，或修改其现有属性，并返回此对象。
// // 参数   需要定义属性的当前对象     当前需要定义的属性名
// Object.defineProperty(user, 'age', {
//     get: function () {
//         return aa
//     },
//     set: function (new_data) {
//         aa = new_data
//     }
//
// })
//
// console.log(user.age);
// user.age = 18;
// console.log(user.age)

// cookie加密    document.cookie




