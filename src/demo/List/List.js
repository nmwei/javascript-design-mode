import $ from 'jquery'
import { GET_LIST } from '../config/config.js'
import createItem from './CreateItem.js'


export default class List {
  constructor(app) {
    this.app = app
    this.$el = $('<div>')
  }

  init() {
    //加载数据 - 生成DOM - 渲染DOM
    this.loadData()
    .then(data => this.initItemList(data))
    .then(() => this.render())
  }

  loadData() {
    return fetch(GET_LIST).then(result => result.json())
  }

  initItemList(data) {
    data.forEach(itemData => {
      let item = createItem(this, itemData)
      item.init()
      return item
    })
  }

  render() {
    this.app.$el.append(this.$el)
  } 
}