class Beverage {
  init() {
    this.boilWater()
    this.brew()
    this.pourInCup()
    this.addCondiments()
  }

  boilWater() {
    console.log('把水煮沸')
  }

  brew(){} //沸水冲泡饮料
  pourInCup(){} //饮料倒进杯子
  addCondiments(){} //加调料
}

class Coffee extends Beverage {
  brew(){
    console.log('用沸水冲泡咖啡')
  } 
  pourInCup(){
    console.log('把咖啡倒进杯子')
  } 
  addCondiments(){
    console.log('加糖和牛奶')
  } 
}

class Tea extends Beverage {
  brew(){
    console.log('用沸水浸泡茶叶')
  } 
  pourInCup(){
    console.log('把茶倒进杯子')
  } 
  addCondiments(){
    console.log('加柠檬')
  } 
}

const coffee = new Coffee()
coffee.init()

const tea = new Tea()
tea.init()
