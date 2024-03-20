

// 创建类的关键字   class
// 初始化   constructor 类似python的 init
// 继承关键字  extends
class Preson {
    constructor(name) {
        this.name = name
    }
    dance(){
        console.log('跳舞')
    }
}


class Student extends Preson{
    constructor(name, score) {
        super(name);
        this.score = score
    }
    intro(){
        console.log(`我是${this.name}, 考了${this.score}`)
    }

}

var student = new Student('张三', 10)
console.log(student)
student.intro()
student.dance()




