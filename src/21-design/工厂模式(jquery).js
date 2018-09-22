class jQuery {
  constructor(selector) {
    const slice = Array.prototype.slice
    const dom = slice.call(document.querySelectorAll(selector))
    this.selector = selector || ''
    const len = dom ? dom.length : 0;
    this.length = len
    for(let i = 0; i < len; i++) {
      this[i] = dom[i]
    }
  }

  append(node) {}

  addClass(name) {}

  html(data) {}
}

window.$ = selector => new jQuery(selector)






