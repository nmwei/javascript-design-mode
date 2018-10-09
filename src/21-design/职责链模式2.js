const order500 = (orderType, pay, stock) => {
  if(orderType === 1 && pay === true){
    console.log('500元定金预购，得到100优惠券')
    return true
  }
  return false
}

const order200 = (orderType, pay, stock) => {
  if(orderType === 2 && pay === true){
    console.log('200元定金预购，得到50优惠券')
    return true
  }
  return false
}

const orderNormal = (orderType, pay, stock) => {
  if(stock > 0){
    console.log('普通购买，无优惠券')
  } else {
    console.log('手机内存不足')
  }
  return true
}

class Chain {
  constructor(fn) {
    this.fn = fn
    this.successor = null
  }

  setNextSuccessor(successor){
    this.successor = successor
  }

  passRequest() {
    const res = this.fn.apply(this, arguments)
    return res ? res : this.successor && this.successor.passRequest.apply(this.successor, arguments)
  }
}

const chainOrder500 = new Chain(order500)
const chainOrder200 = new Chain(order200)
const chainOrderNormal = new Chain(orderNormal)

chainOrder500.setNextSuccessor(chainOrder200)
chainOrder200.setNextSuccessor(chainOrderNormal)

chainOrder500.passRequest(1, true, 500) //500元定金预购，得到100优惠券
chainOrder500.passRequest(2, true, 500) //200元定金预购，得到50优惠券
chainOrder500.passRequest(3, false, 500) //普通购买，无优惠券
chainOrder500.passRequest(3, false, 0) //手机内存不足
