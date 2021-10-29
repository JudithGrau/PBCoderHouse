const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//motor de plantilla que se utiliza
app.set('view engine', 'pug')
//directorio donde se encuentran los archivos de la plantilla
app.set('views', "./views")
//espacio publico del servidor
app.use(express.static('public'))


const router = require('./routes/router')

app.use('/api', router)

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on('error', (error) => {
    console.log('Error en el servidor ', error)
})