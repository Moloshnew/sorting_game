var c = document.getElementById("canvas")
var ctx = c.getContext("2d")
ctx.canvas.width  = window.innerWidth
ctx.canvas.height = window.innerHeight

canvas.onmousemove = function (event) {
  if (trash.selected === undefined)
    return 
  trash.selected.x = event.x + trash.xoffset
  trash.selected.y = event.y + trash.yoffset
  trash.print()
}

canvas.onmousedown = function (event) {
  if (event.button === 2) {
    trash.action()
  } else if (event.button === 0) {
    trash.selected = trash.select(event.x, event.y)
    trash.xoffset = trash.selected.x - event.x
    trash.yoffset = trash.selected.y - event.y
  }
}

canvas.onmouseup = function (event) {
  trash.selected = undefined
}

canvas.oncontextmenu = function () {
  return false
}

window.onload = function() {
  trash.init()

  new trash()

  trash.print()
}
