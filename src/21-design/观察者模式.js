class Subject {
  constructor() {
    this.state = 0
    this.observers = []
  }
  
  getState() {
    return this.state
  }

  setState(state) {
    this.state = state
    this.notifyAllObservers()
  }

  notifyAllObservers() {
    this.observers.forEach(observer => {
      observer.update(this.state)
    })
  }

  attach(observer) {
    this.observers.push(observer)
    observer.subject = this
  }
}

class Observer {
  constructor(name) {
    this.name = name
    this.subject = null
  }

  update(state) {
    console.log(`${this.name} update state to ${state}`)
  }
}

const sub = new Subject()
const obs1 = new Observer('obs1')
const obs2 = new Observer('obs2')
sub.attach(obs1)
sub.attach(obs2)

sub.setState(1)
sub.setState(2)
sub.setState(3)