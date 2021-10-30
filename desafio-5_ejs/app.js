const express = require('express')

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8080


app.set('views', "./views")
app.set('view engine', 'ejs') //motor de plantilla
app.use(express.static('public'))

const router = require('./routes/router')

app.use('/api', router)


const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on('error', (error) => {
    console.log('Error en el servidor ', error)
})