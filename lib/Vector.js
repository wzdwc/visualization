class Vector {
  constructor (x,y) {
    this.length = 1
    this.angle = 0
    this.origin = {
      x: x,
      y: y
    }
    this.x = 0
    this.y = 0
    this.init(x, y)
  }
  init() {
    this.setPoint()
  }
  setPoint() {
    this.x = this.origin.x + Math.sin(this.angle) * this.length
    this.y = this.origin.y + Math.cos(this.angle) * this.length
  }
  scale(length = 0) {
    this.length += length
    this.setPoint()
    return this
  }
  translate(x = 0, y = 0) {
    this.origin.x += x
    this.origin.y += y
    return this
  }
  rotate(angle = 0) {
    this.angle = angle
    this.setPoint()
    return this
  }
}
