//父类 - 车
class Car {
  constructor(name, number) {
    this.name = name
    this.number = number
  }
}

//子类 - 快车
class KuaiChe extends Car {
  constructor(name, number) {
    super(name, number)
    this.price = 1
  }
}

//子类 - 专车
class ZhuanChe extends Car {
  constructor(name, number) {
    super(name, number)
    this.price = 2
  }
}

//行程
class Trip {
  constructor(car, distance) {
    this.car = car
    this.distance = distance
  }

  start() {
    console.log(`行程开始 车名为${this.car.name}，车牌号为${this.car.number}`)
  }

  end() {
    console.log(`行程结束 车费为${this.distance * this.car.price}`)
  }
}

const zhuanChe = new ZhuanChe('专车', '299567')
const trip = new Trip(zhuanChe, 5)
trip.start()
trip.end()
