var myImg = (function() {
  var imgNode = document.createElement('img')
  document.body.appendChild(imgNode)
  return function(src){
    imgNode.src = src
  }
})()

var proxyImg = (function() {
  var img = new Image()
  img.onload = function() {
    myImg(this.src)
  }

  return function(src) {
    myImg('loading.gif')
    img.src = src
  }
})()

//proxyImg('1.png')


//计算乘积
const mult = function(){
  let a = 1
  debugger;
  for(let i = 0; i < arguments.length; i++) {
    a *= arguments[i]
  }
  return a
}

//缓存代理工厂
const createProxyFactory = fn => {
  let cache = {}
  return function(){
    const args = Array.prototype.join.call(arguments, ',')
    if(cache[args]) {
      return cache[args]
    }
    return cache[args] = fn.apply(this, arguments)
  }
}

var proxyMult = createProxyFactory(mult)
console.log(proxyMult(1,2,3,4)) //24
console.log(proxyMult(1,2,3,4)) //24





