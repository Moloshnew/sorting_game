
class trash {

  static is_transparent(img, x, y) {
    var img_cvs = document.createElement('image-canvas')
    var img_ctx = canvas.getContext('2d')

    img_ctx.drawImage(img, 0, 0, img.width, img.height)
    img_ctx.canvas.width = img.width
    img_ctx.canvas.height = img.height
    return img_ctx.getImageData(x, y, 1, 1).data[3] === 0
  }

  static random_int = function(max) {
		return Math.floor(Math.random() * max)
	}

	static list = []
	static image_names = [ 'wp2.jpg' ]
	static images = []
  static image_datas = []
	
	constructor() {
		this.img = trash.images[trash.random_int(trash.image_names.length)]
		this.x = 100
		this.y = 100
		this.w = this.img.width
		this.h = this.img.height

		trash.list.push(this)
	}

	static init = function() {
		trash.image_names.forEach(image_name => {
      var img = new Image() 
			trash.images.push(img)
      img.src = image_name
		})
	}

	static print = function() {
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
		trash.list.forEach(piece => {
			ctx.drawImage(piece.img, piece.x, piece.y, piece.w, piece.h)
		})
	}

  static select = function(x, y) {
    let selected = undefined
    trash.list.forEach(piece => {
      if (piece.x < x && piece.x + piece.w > x &&
          piece.y < y && piece.y + piece.h > y &&
          trash.is_transparent(piece.img, x, y)
        ) {
        selected = piece
      }
    })
    return selected
  }

  static action = function() {

  }

}
