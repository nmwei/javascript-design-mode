class User {
  constructor(type) {
    this.type = type
  }

  buy() {
    if(this.type === 'oridinary') {
      console.log('普通用户购买')
    } else if(this.type === 'member') {
      console.log('会员用户购买')
    } else if('this.type' === 'vip') {
      console.log('vip 用户购买')
    }
  }
}

let u1 = new User('member') 
u1.buy() //会员用户购买

class OridinaryUser {
  buy() {
    console.log('普通用户购买')
  }
}
class MemberUser {
  buy() {
    console.log('会员用户购买')
  }
}

class VipUser {
  buy() {
    console.log('vip 用户购买')
  }
}

class UserManager {
  constructor() {
    this.user = null
  }

  setUser(user) {
    this.user= user
  }

  userBuy() {
    this.user.buy()
  }
}


const m = new UserManager()
const u = new OridinaryUser()
m.setUser(u)
m.userBuy() //普通用户购买

const strategies = {
  oridinary() {
    console.log('普通用户购买')
  },
  member() {
    console.log('会员用户购买')
  },
  vip() {
    console.log('vip 用户购买')
  }
}

const userBuy = user => strategies[user]()
userBuy('member') //会员用户购买