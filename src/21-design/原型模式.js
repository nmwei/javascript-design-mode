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