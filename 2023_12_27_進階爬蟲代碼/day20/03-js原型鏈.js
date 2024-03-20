



class Preson {
    constructor(name) {
        this.name = name
    }
    dance(){
        console.log('跳舞')
    }
}


class Teach extends Preson{
    constructor(name, sub) {
        super(name);
        this.sub = sub
    }
    intor(){
        console.log(`我是${this.name}, 教的${this.sub}`)
    }
}

var bc = new Teach('柏汌', 'python')











