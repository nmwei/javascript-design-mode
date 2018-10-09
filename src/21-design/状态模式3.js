class OffLightState {
  constructor(light) {
    this.light = light
  }

  switch() {
    console.log('微光') //offLightState对应的行为
    this.light.setState(this.light.weakLightState) //切换状态到weakLightState
  }
}

class WeakLightState {
  constructor(light) {
    this.light = light
  }

  switch() {
    console.log('强光')
    this.light.setState(this.light.strongLightState)
  }
}

class StrongLightState {
  constructor(light) {
    this.light = light
  }

  switch() {
    console.log('关灯')
    this.light.setState(this.light.offLightState)
  }
}

class Light {
  constructor() {
    this.offLightState = new OffLightState(this)
    this.weakLightState = new WeakLightState(this)
    this.strongLightState = new StrongLightState(this)
  }

  init() {
    this.currState = this.offLightState
  }

  setState(newState) {
    this.currState = newState
  }

  press() {
    this.currState.switch()
  }
}

const light = new Light()
light.init()
light.press() //微光
light.press() //强光
light.press() //关灯