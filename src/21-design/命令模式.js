//接受者
class Receiver{
  exec() {
    console.log('执行')
  }
}

//命令者
class  Command {
  constructor(receiver) {
    this.receiver = receiver
  }

  cmd() {
    console.log('执行命令')
    this.receiver.exec()
  }
}

//触发者
class Invoker {
  constructor(command) {
    this.command = command
  }

  invoke() {
    console.log('开始')
    this.command.cmd()
  }
}

//士兵
const soldier = new Receiver()
//小号手
const trumpeter = new Command(soldier)
//将军
const general = new Invoker(trumpeter)

general.invoke()