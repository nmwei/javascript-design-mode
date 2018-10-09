const bindClick = (button, func) => {
  button.onclick = func
}

const MenuBar = {
  refresh() {
    console.log('刷新菜单界面')
  }
}

const SubMenu = {
  add() {
    console.log('增加子菜单')
  },
  del() {
    console.log('删除子菜单')
  }
}

bindClick(button1, MenuBar.refresh)
bindClick(button2, SubMenu.add)
bindClick(button3, SubMenu.del)
