//importo la libreria
const express = require('express')

//creo una app
const app = express()

app.get('/', (req, res) => {
    res.send('hola desde express')
})
//peticiones de tipo Get(al navegador) con un path(ruta) y un callback
app.get('/cosas', (req, res) => {
    res.send('mis cosassss')
})

const server = app.listen(8080, () => {
    console.log(`ya me conecté al puerto ${server.address().port}`)
})
server.on('error', (error) => {
    console.log('hubo un error...')
    console.log(error)
})