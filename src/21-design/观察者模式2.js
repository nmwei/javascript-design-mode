document.body.addEventListener('click', function() {
  console.log(1)
}, false)

document.body.addEventListener('click', function() {
  console.log(2)
}, false)

document.body.click() //模拟用户点击