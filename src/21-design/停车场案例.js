//车辆
class Car {
  constructor(number) {
    this.number = number
  }
}

//停车位
class Stall {
  constructor() {
    this.empty = true
  }

  in() {
    this.empty = false
  }

  out() {
    this.empty = true
  }
}

//停车层
class Floor {
  constructor(index, stalls) {
    this.index = index
    this.stalls = stalls || []
  }

  emptyNum() {
    return this.stalls.filter(stall => stall.empty).length
  }
}

//出口显示屏
class Screen {
  show(car, inTime) {
    console.log(`车牌号为${car.number},停留时间为${Date.now() - inTime}`)
  }
} 

//入口摄像头
class Camera {
  shoot(car) {
    return {
      number: car.number,
      inTime: Date.now()
    }
  }
}

//停车场
class Park {
  constructor(floors, camera, screen) {
    this.camera = camera
    this.screen = screen
    this.floors = floors || []
    this.carList = {};
  }

  emptyNum() {
    let num = 0
    this.floors.forEach(floor => {
      const emptyNum = floor.emptyNum()
      num += emptyNum
    })
    return num;
  }

  showMsg() {
    let info = ''
    for(let i = 1; i < this.floors.length; i++) {
      const floor = this.floors[i]
      info += `第${floor.index}层还有${floor.emptyNum()}个空位`
    }
    console.log(info)
  }

  in(car) {
    if(this.emptyNum() > 0) {
      const info = this.camera.shoot(car)
      for(let i = 1; i < this.floors.length; i ++) {
        const floor = this.floors[i]
        const allNum = floor.stalls.length
        const emptyNum = floor.emptyNum()
        if(emptyNum > 0) {
          let index = 1; 
          while(!floor.stalls[index].empty) {
            index++
          }
          const stall = floor.stalls[index]
          stall.in()
          //保存停车位信息
          info.stall = stall
          break
        }
      } 
      this.carList[car.number] = info
    } else {
      console.log('停车场已满')
    }
  }

  out(car) {
    const info = this.carList[car.number]
    info.stall.out()
    this.screen.show(car, info.inTime)
    delete this.carList[car.number]
  }
}

//测试代码
const floors = []
for(let i = 1; i <= 3; i ++) {
  const stalls = []
  for(let j = 1; j <= 100; j++) {
    stalls[j] = new Stall()
  }
  floors[i] = new Floor(i, stalls)
}

const camera = new Camera()
const screen = new Screen()
const park = new Park(floors, camera, screen)
const car1 = new Car('100')
const car2 = new Car('200')
const car3 = new Car('300')
park.in(car1)
park.showMsg()
park.in(car2)
park.showMsg()
park.out(car1)
park.showMsg()
park.in(car3)
park.showMsg()
park.out(car2)
park.showMsg()
park.out(car3)
park.showMsg()


