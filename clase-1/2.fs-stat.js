const fs = require('node:fs') // A partir de Node 16, se recomeinda poner node: antes del módulo

const stats = fs.statSync('./archivo.txt')

console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  stats.size // Tamaño en bytes
)
