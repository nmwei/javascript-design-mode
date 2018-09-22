class Action {
  constructor(name) {
    this.name = name
    this.nextAction = null
  }

  setNextAction(action) {
    this.nextAction = action
  }

  handle() {
    console.log(`${this.name} 审批`)
    this.nextAction && this.nextAction.handle()
  }
}

const action1 = new Action('组长')
const action2 = new Action('经理')
const action3 = new Action('总监')

action1.setNextAction(action2)
action2.setNextAction(action3)

action1.handle()