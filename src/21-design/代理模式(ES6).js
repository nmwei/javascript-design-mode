
//明星
let star = {
  name: '张XX',
  age: 25,
  phone: '13900001111'
}

//经纪人
let agent = new Proxy(star, {
  get: function (target, key, receiver) {
    if(key === 'phone') {
      //返回经纪人自己的电话
      return '13922225555'
    }
    if(key === 'price') {
      //明星不报价，经纪人报价
      return 120000
    }
    return target[key]
  },
  set: function (target, key, value, receiver) {
    if(key === 'customPrice') {
      if(value < 100000) {
        throw new Error('价格太低')
      } else {
        target[key] = value
        return true
      }
    }
  }
})

console.log(agent.name) //张XX
console.log(agent.age) //25 
console.log(agent.phone) //13922225555
console.log(agent.price) //120000
agent.customPrice = 150000
console.log(star.customPrice) //150000
agent.customPrice = 90000 //Uncaught Error: 价格太低




