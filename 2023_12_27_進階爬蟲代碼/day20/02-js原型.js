


class Student {
    constructor(name, score) {
        this.name = name
        this.score = score
    }
    intor(){
        console.log(`我是${this.name}, 考了${this.score}`)
    }
}
var student = new Student('张三', 10)

// [[Prototype]]    __proto__  对象的隐式原型
// prototype    类的现式原型  

console.log(student);






