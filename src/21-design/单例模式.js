class Single {
  login() {
    console.log('login')
  }
}

Single.getInstance = (function() {
  let instance
  return () => {
    if(!instance) {
      instance = new Single()
    }
    return instance
  }
})()

let obj1 = Single.getInstance()
obj1.login()
let obj2 = Single.getInstance()
obj1.login()

console.log(obj1 === obj2) //true