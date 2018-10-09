class Plane{
  fire() {
    console.log('发射普通子弹')
  }
}

class MissileDecorator {
  constructor(plane) {
    this.plane = plane
  }

  fire() {
    this.plane.fire()
    console.log('发射导弹')
  }
}

class AtomDecorator {
  constructor(plane) {
    this.plane = plane
  }

  fire() {
    this.plane.fire()
    console.log('发射原子弹')
  }
}

let plane = new Plane()
//plane = new MissileDecorator(plane)
//plane = new AtomDecorator(plane)
//plane.fire() //发射普通子弹 发射导弹 发射原子弹


Function.prototype.before = function(beforefn) {
  var _self = this
  return function() {
    beforefn.apply(this, arguments)
    return _self.apply(this, arguments)
  }
}

Function.prototype.after = function(afterfn) {
  var _self = this
  return function() {
    var ret = _self.apply(this, arguments)
    afterfn.apply(this, arguments)
    return ret
  }
}

 var fun = function() {
  console.log(1)
 }

 var beforeFun = fun.before(function() {
   console.log(0)
 })
 beforeFun() //0 1 


 var afterFun = fun.after(function() {
   console.log(2)
 }).after(function() {
   console.log(3)
 })
 afterFun() //1 2 3
