class Duck {
  duckSinging() {
    console.log('嘎嘎嘎')
  }
}

class Chicken {
  duckSinging() {
    console.log('嘎嘎嘎')
  }
}

const choir = []
const joinChoir = ( animal ) => {
  if(animal && typeof animal.duckSinging === 'function') {
    choir.push(animal)
    console.log('恭喜加入合唱团')
    console.log('合唱团已有成员数量' + choir.length)
  }
}

const duck = new Duck()
const chicken = new Chicken()
joinChoir(duck)
joinChoir(chicken)