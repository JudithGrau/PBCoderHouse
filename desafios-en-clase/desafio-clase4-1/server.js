//express requerido e instanciado
const express = require('express')

const app = express()

const frase = 'Hola mundo como están'

//endpoint: punto de acceso al servidor, en el cual tengo definido un manejador
//uri: /api/letras/1
//url: misitioweb.com/api/letras/1

//endpoint-1 /api/frase  Devuelve una frase en forma completa
app.get('/api/frase', (req, res) => {
    res.json({ frase })
})

//endpoint-2 /api/letras/:num  Devuelve por numero de orden la letra dentro de esa frase
app.get('/api/letras/:num', (req, res) => {
    const num = parseInt(req.params.num) //extraemos el parametro, nos fijamos si es un entero

    if (isNaN(num)) { //sino es un numero
        return res.json({ error: 'El parámetro ingresado no es un número' })
    }

    if (num < 1 || num > frase.length) {
        return res.json({ error: 'El parámetro está fuera de rango' })
    }

    res.json({ letra: frase[ num - 1 ] })  //Devuelve con apiRest, un objeto json
})

//endpoint-3 /api/palabras/:num  Devuelve por numero de orden la palabra dentro de esa frase
app.get('/api/palabras/:num', (req, res) => {
    const num = parseInt(req.params.num)

    if (isNaN(num)) {
        return res.json({ error: 'El parámetro ingresado no es un número' })
    }

    const palabras = frase.split(' ')  //busca las palabras tomando como referencia el espacio

    if (num < 1 || num > palabras.length) {
        return res.json({ error: 'El parámetro está fuera de rango' })
    }

    res.json({ palabra: palabras[ num - 1 ] }) //trae la palabra de acuerdo a la posicion de la palabra
})

//puerto a escuchar
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
