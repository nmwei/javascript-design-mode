import Item from './Item.js'

function createDiscount(data) {
  return new Proxy(data, {
    get: function(target, key, receiver) {
      if(key === 'name') {
        return `${target[key]}【折扣】`
      }
      if(key === 'price') {
        return target[key] * 0.8
      }
      return target[key]
    }
  })
}

//工厂方法
export default (list, data) => {
  data = data.discount ? createDiscount(data) : data
  return new Item(list,  data)
}