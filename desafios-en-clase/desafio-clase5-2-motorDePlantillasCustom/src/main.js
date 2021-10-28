const express = require('express')
const { promises: fs } = require('fs')

const app = express()

app.engine('cte', async (filePath, options, callback) => {
  try {
    const content = await fs.readFile(filePath)
    const rendered = content.toString()
      .replace('^^titulo$$', options.titulo)
      .replace('^^mensaje$$', options.mensaje)
      .replace('^^autor$$', options.autor)
      .replace('^^version$$', options.version)
    return callback(null, rendered)
  } catch (err) {
    return callback(new Error(err))
  }
})

app.set('views', './views')

app.set('view engine', 'cte')

const datos1 = {
  titulo: 'cte1',
  mensaje: 'mensaje de cte1',
  autor: 'autor de cte1',
  version: 'v1'
}

const datos2 = {
  titulo: 'cte2',
  mensaje: 'mensaje de cte2',
  autor: 'autor de cte2',
  version: 'v2'
}

app.get('/datos1', (req, res) => {
  res.render('plantilla', datos1)
})

app.get('/datos2', (req, res) => {
  res.render('plantilla', datos2)
})

app.listen(8080)