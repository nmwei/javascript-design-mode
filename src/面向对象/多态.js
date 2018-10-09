class GoogleMap {
  show() {
    console.log('开始渲染谷歌地图')
  }
}

class BaiduMap {
  show() {
    console.log('开始渲染百度地图')
  }
}

const renderMap = map => {
  if(map.show instanceof Function) {
    map.show()
  }
}

renderMap(new GoogleMap())
renderMap(new BaiduMap())