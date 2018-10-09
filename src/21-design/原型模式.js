let prototype = {
  getName() {
    return this.first + '  ' + this.last
  },

  say() {
    alert('hello')
  }
}

let x = Object.create(prototype)
x.first = 'A'
x.last = 'B'
alert(x.getName())
x.say()


//兼容不支持浏览器
Object.create = Object.create || function(obj) {
  var F = function() {}
  F.prototype = obj
  return new F()
}