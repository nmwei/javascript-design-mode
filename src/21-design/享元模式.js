class Model {
  constructor(sex) {
    this.sex = sex
    this.underwear = ''
  }

  setUnderwear(underwear) {
    this.underwear = underwear
  }

  takePhoto() {
    console.log(`sex: ${this.sex}; underwear: ${this.underwear}`)
  }
}

const maleModel = new Model('male')
const femaleModel = new Model('female')

for(let i = 1; i<= 50; i++) {
  maleModel.setUnderwear('underwear' + i)
  maleModel.takePhoto()
}

for(let j = 1; j<= 50; j++) {
  femaleModel.setUnderwear('underwear' + j)
  femaleModel.takePhoto()
}