
class Iterator {
  constructor(container) {
    this.list = container.list
    this.index = 0
  }

  next() {
    if(this.hasNext()) {
      return this.list[this.index++] 
    }
    return null
  }

  hasNext() {
    return this.index < this.list.length
  }
}

class Container {
  constructor(list) {
    this.list = list
  }

  getIterator() {
    return new Iterator(this)
  }
}

// var arr = [1, 2, 3, 4, 5]
// var container = new Container(arr)
// var iterator = container.getIterator()
// while(iterator.hasNext()) {
//   console.log(iterator.next())
// }


function each(data) {
  let iterator = data[Symbol.iterator]()

  let item = { done: false }
  while(!item.done) {
    item = iterator.next()
    if(!item.done) {
      console.log(item.value)
    }
  }
}

var map = new Map()
map.set(1, 'a')
map.set(2, 'b')
var arr = [1,2,3]
var str = 'abc'
each(arr)
each(str)
each(map)