class Adaptee {
  specifiRequest() {
    return '德国标准插头'
  }
}

class Target {
  constructor() {
    this.adaptee = new Adaptee()
  }

  request() {
    let info = this.adaptee.specifiRequest()
    return `${info} - 转换器 - 中国标准插头`
  }
 }

 let target = new Target()
 console.log(target.request()) 