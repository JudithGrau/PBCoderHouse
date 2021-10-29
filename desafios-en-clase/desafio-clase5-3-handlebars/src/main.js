const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultLayout: 'index.hbs'
}))

app.set('views', './views') //carpeta de la plantilla

app.get('/', (req, res) => {
  res.render('datos.hbs', { //nombre de la plantilla que voy a mostrar
    nombre: 'coder',
    apellido: 'house',
    edad: 25,
    email: 'coder@house',
    telefono: '12345678'
  })
})

app.listen(8080)