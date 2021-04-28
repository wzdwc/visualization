export class GLShader {
  constructor (gl, config) {
    this.points = config.points
    this.gl = gl
    this.vertex = ''
    this.fragment = ''
    this.program = null
  }
  // 顶点着色器
  get vertexShader () {
    const vertexShader = this.gl.createShader(this.gl.VERTEX_SHADER)
    this.gl.shaderSource(vertexShader, this.shader.vertex)
    this.gl.compileShader(vertexShader)
    return vertexShader
  }

  // 片源着色器
  get fragmentShader () {
    const fragmentShader = this.gl.createShader(this.gl.FRAGMENT_SHADER)
    this.gl.shaderSource(fragmentShader, this.shader.fragment)
    this.gl.compileShader(fragmentShader)
    return fragmentShader
  }

  set shader ({ vertex, fragment }) {
    if (vertex) {
      this.vertex = vertex
    }
    if (fragment) {
      this.fragment = fragment
    }
  }

  get shader () {
    return {
      vertex: this.vertex,
      fragment: this.fragment,
    }
  }

  // 缓冲区
  bindBuffer() {
    const bufferId = this.gl.createBuffer()
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferId)
    this.gl.bufferData(this.gl.ARRAY_BUFFER, this.points, this.gl.STATIC_DRAW)
  }

  createProgram() {
    const program = this.gl.createProgram()
    console.log(program)
    this.gl.attachShader(program, this.vertexShader)
    this.gl.attachShader(program, this.fragmentShader)
    this.gl.linkProgram(program)
    this.gl.useProgram(program)
    this.program = program
    return program
  }

  enableVertex() {
    const vPosition = this.gl.getAttribLocation(this.program, 'position')
    this.gl.vertexAttribPointer(vPosition, 2, this.gl.FLOAT, false, 0, 0)
    this.gl.enableVertexAttribArray(vPosition)
  }
}
