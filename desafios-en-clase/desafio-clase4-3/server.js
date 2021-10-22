const express = require('express')

const app = express()

app.use(express.json())

//usa un array para las palabras
const palabras = [ 'Frase', 'inicial' ]

app.get('/api/frase', (req, res) => {
    res.json({ frase: palabras.join(' ') }) //join para unir las palabras
})

app.get('/api/palabras/:pos', (req, res) => {
    const { pos } = req.params
    res.json({ buscada: palabras[ parseInt(pos) - 1 ] })
})

//Nuevos endpoints:
app.post('/api/palabras', (req, res) => {
    const { palabra } = req.body //extraigo la palabra del body/extraigo el campo palabra del objeto del req.body
    palabras.push(palabra)//guardo la palabra
    res.json({ agregada: palabra, posicion: palabras.length })//devuelvo la pabalabra agregada y la posicion donde la agregue
})

app.put('/api/palabras/:pos', (req, res) => {
    const { palabra } = req.body
    const { pos } = req.params//tengo el parametro con la posicion
    const palabraAnt = palabras[ parseInt(pos) - 1 ]//me guardo la palabra anterior
    palabras[ parseInt(pos) - 1 ] = palabra//reemplazo la palabra por la nueva
    res.json({ actualizada: palabra, anterior: palabraAnt })//devuelvo el json con la palabra actualizada
})

app.delete('/api/palabras/:pos', (req, res) => {
    const { pos } = req.params//extrae el parametro de ruta con la posicion
    const [ palabra ] = palabras.splice(parseInt(pos) - 1, 1)//borra un elemento en la posicion que yo le diga
    res.json({ borrada: palabra })
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
