class A {
  constructor() {
    this.number = 0
  }

  setNumber(num, m) {
    this.number = num
    if(m) {
      m.setB()
    }
  }
}

class B {
  constructor() {
    this.number = 0
  }

  setNumber(num, m) {
    this.number = num
    if(m) {
      m.setA()
    }
  }
}

//中介者
class Mediator {
  constructor(a, b) {
    this.a = a
    this.b = b
  }

  setB() {
    let num = this.a.number
    this.b.setNumber(num / 10)
  }

  setA() {
    let num = this.b.number
    this.a.setNumber(num + 5)
  }
}

const a = new A()
const b = new B()
const m = new Mediator(a, b)
a.setNumber(100, m)
console.log(a.number, b.number)

b.setNumber(100, m)
console.log(a.number, b.number)