import StateMachine from 'javascript-state-machine'

const fsm = new StateMachine({
  init: 'pending',
  transitions: [
    {
      name: 'resolve',
      from: 'pending',
      to: 'fullfilled'
    },
    {
      name: 'reject',
      from: 'pending',
      to: 'rejected'
    }
  ],
  methods: {
    onResolve(state, data){
      //state - 当前状态机实例; data - fsm.resolve(xxx) 传递的参数
      data.successList.forEach(fn => fn())
    },
    onReject(state, data){
      //state - 当前状态机实例; data - fsm.reject(xxx) 传递的参数
      data.failList.forEach(fn => fn())
    }
  }
})

class MyPromise {
  constructor(fn) {
    this.successList = []
    this.failList = []
    fn(() => {
      // resolve 函数
      debugger;
      fsm.resolve(this)
    }, () => {
      // reject 函数
      fsm.reject(this)
    })
  }

  then(successFn, failFn) {
    this.successList.push(successFn)
    this.failList.push(failFn)
  }
}

function loadImg(src) {
  const mp = new MyPromise((resolve, reject) => {
    const img = document.createElement('img')
    img.onload = () => resolve(img)
    img.onerror = () => reject()
    img.src = src
  })
  return mp
}

let src = 'https://www.baidu.com/img/bd_logo1.png'
let mp = loadImg(src)

mp.then(() => {
  console.log('success1')
}, () => {
  console.log('fail1')
})

mp.then(() => {
  console.log('success2')
}, () => {
  console.log('fail2')
})





