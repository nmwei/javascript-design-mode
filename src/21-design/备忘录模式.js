//备忘类
class Memento {
  constructor(content) {
    this.content = content
  }

  getContent() {
    return this.content
  }
}

//备忘列表
class CareTaker {
  constructor() {
    this.list = []
  }

  add(memento) {
    this.list.push(memento)
  }

  get(index) {
    return this.list[index]
  }
}

//编辑器
class Editor {
  constructot() {
    this.content =  null
  }

  setContent(content) {
    this.content = content
  }

  getContent() {
    return this.content
  }

  saveContentToMemento() {
    return new Memento(this.content)
  }

  setContentFromMemento(mement) {
    return this.content = mement.getContent()
  }
 }

 //测试代码
const editor = new Editor()
const careTaker = new CareTaker()

editor.setContent('1')
editor.setContent('2')
careTaker.add(editor.saveContentToMemento())
editor.setContent('3')
careTaker.add(editor.saveContentToMemento())
editor.setContent('4')
console.log(editor.getContent()) // 4
editor.setContentFromMemento(careTaker.get(1)) //撤销
console.log(editor.getContent()) // 3 
editor.setContentFromMemento(careTaker.get(0)) //撤销
console.log(editor.getContent()) // 2

