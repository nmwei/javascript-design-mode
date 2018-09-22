class State{
  constructor(color) {
    this.color = color
  }
  
  handle(context) {
    console.log(`turn to ${this.color} light`)
    context.setState(this)
  }
}

class Context {
  constructor() {
    this.state = null
  }

  getState() {
    return this.state
  }

  setState(state) {
    this.state = state
  }
}

const context = new Context()
const green = new State('green')
const yellow = new State('yellow')
const red = new State('red')

// green.handle(context)
// console.log(context.getState())

// yellow.handle(context)
// console.log(context.getState())

// red.handle(context)
// console.log(context.getState())

import StateMachine from 'javascript-state-machine'
import $ from 'jquery'

let fsm = new StateMachine({
  init: '收藏',
  transitions: [
    {
      name: 'doStore',
      form: '收藏',
      to: '取消收藏'
    },
    {
      name: 'deleteStore',
      form: '取消收藏',
      to: '收藏'
    }
  ],
  methods: {
    onDoStore: function() {
      alert('收藏成功') 
      updateText()
    },
    onDeleteStore: function() {
      alert('取消收藏成功') 
      updateText()      
    }
  }
})

let $btn = $('#btn')

$btn.click(function() {
  if(fsm.is('收藏')) {
    fsm.doStore()
  } else {
    fsm.deleteStore()
  }
})

// 更新按钮文案 
function updateText() {
  $btn.text(fsm.state)
}

//初始化文案
//updateText()



