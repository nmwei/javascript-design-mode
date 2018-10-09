var myObj = (function() {
  var _name = 'sven'
  return {
    getName: function() {
      return _name
    }
  }
})()

//console.log(myObj.getName()) // sven
//console.log(myObj._name) // undefined

var obj1 = new Object()
var obj2 = {}

//console.log(Object.getPrototypeOf(obj1) === obj1.__proto__)  //true
//console.log(Object.getPrototypeOf(obj1) === Object.prototype) //true
//console.log(Object.getPrototypeOf(obj2) === Object.prototype) //true


var obj = {name: 'sven'}

var A = function() {}
A.prototype = obj

var B = function() {}
B.prototype = new A()

var b = new B()
console.log(b.name) //sven




