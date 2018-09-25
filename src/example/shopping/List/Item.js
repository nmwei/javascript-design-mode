import $ from 'jquery'
import getCart from '../ShoppingCart/GetCart'
import StateMachine from 'javascript-state-machine'
import { log } from '../util/log.js'

export default class Item {
  constructor(list, data) {
    this.list = list
    this.data = data
    this.$el = $('<div>')
    this.cart = getCart()
  }

  init() {
    this.initContent()
    this.initBtn()
    this.render()
  }

  //生成内容
  initContent() {
    let $el = this.$el
    let data = this.data
    $el.append(`<p>名称: ${data.name}</p>`)
    $el.append(`<p>价格: ${data.price}</p>`)
  }

  //生成按钮
  initBtn() {
    let $el = this.$el
    let $btn = $('<button>')
    let fsm = new StateMachine({
      init: '加入购物车',
      transitions: [
        {
          name: 'addToChart',
          form: '加入购物车',
          to: '从购物车删除'
        }, 
        {
          name: 'deleteFromCart',
          from: '从购物车删除',
          to: '加入购物车'
        }
      ],
      methods: {
        onAddToChart: () => {
          this.addToCartHandle()
          updateText()
        },
        onDeleteFromCart: () => {
          this.deleteFromCartHandle()
          updateText()
        }
      }
    })

    function updateText() {
      $btn.text(fsm.state)
    }

    $btn.click(() => {
      if(fsm.is('加入购物车')) {
        fsm.addToChart()
      } else {
        fsm.deleteFromCart()
      }
    }) 
    updateText() 
    $el.append($btn)
  }

  render() {
    this.list.$el.append(this.$el)
  }

  @log('add')
  addToCartHandle() {
    this.cart.add(this.data)
  }

  @log('del')
  deleteFromCartHandle() {
    this.cart.del(this.data.id)
  }
}