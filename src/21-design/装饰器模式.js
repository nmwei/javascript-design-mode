class Circle {
  draw() {
    console.log('画一个圆形')
  }
}

class Decorator {
  constructor() {
    this.circle = new Circle()
  }

  draw() {
    this.circle.draw()
    this.setRedBorder(this.circle)
  }

  setRedBorder(circle) {
    console.log('设置红色边框')
  }
 }

 const circle = new Circle()
 circle.draw()

 const dec = new Decorator(circle)
 dec.draw()



 @testDec1
@testDec2(false)
class Demo {}

function testDec1( target) {
  target.isDec1 = true
}

function testDec2( bool ) {
  return function(target) {
    target.isDec2 = bool
  }
}

//console.log(Demo.isDec1) //true
//console.log(Demo.isDec2) //false


function mixins(...list) {
  return function(target) {
    Object.assign(target.prototype, ...list)
  }
}

const Foo = {
  foo() {
    console.log('foo')
  }
}

@mixins(Foo)
class B {}

const b = new B()
//b.foo() //foo







import { readonly, deprecate } from 'core-decorators'
class Person {
  constructor() {
    this.first = 'A'
    this.last = 'B'
  }

  @readonly
  name() { 
    return `${this.first} ${this.last}` 
  }

  @deprecate()
  getName() {
    return `${this.first} ${this.last}`
  }
}

// function readonly(target, name, descriptor){
//   // descriptor对象原来的值如下
//   // {
//   //   value: specifiedFunction,
//   //   enumerable: false,
//   //   configurable: true,
//   //   writable: true
//   // };
//   descriptor.writable = false;
//   return descriptor;
// }

const p = new Person()
console.log(p.name()) 
//A B 
console.log(p.getName()) 
//DEPRECATION Person#getName: This function will be removed in future versions.
//A B 
//p.name = () => {} 
//Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Person>'





class Math{
  @log
  add(a, b) {
    return a + b
  }
}

function log(target, name, descriptor) {
  let oldValue = descriptor.value
  descriptor.value = function() {
    console.log(`calling ${name} wich`, arguments)
    return oldValue.apply(this, arguments)
  }
  return descriptor
}

// const math = new Math()
// const result = math.add(2, 4)
// console.log(result)






