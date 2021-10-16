const fs = require('fs')
const express = require('express')

const app = express()

const randomNumber = (min, max) => {
    return Math.round(Math.random() * ((max) - min) + min)
}

app.get('/', (req,res) => {
    res.send('<h1 style="color:orangered;">Bienvenidos al desafío 3: Servidor con  Express</h1>')
})

app.get('/productos', (req, res)=>{
    try{
        const lectura = fs.readFileSync('./productos.txt', 'utf-8')
        const productos = JSON.parse(lectura)

        const respuesta = JSON.stringify({
            items: productos,
            cantidad: productos.length
        }, null, 4)
        res.send(respuesta)

    }catch(error){
        console.log(error)
        res.send(`Productos no encontrados`)
    }

})

app.get('/productos-random', (req, res)=>{
    try{
        const lectura = fs.readFileSync('./productos.txt', 'utf-8')
        const productos = JSON.parse(lectura)

        const num = randomNumber(0, productos.length - 1)

        const respuesta = JSON.stringify({
            item: productos[num]
        })
        res.send(respuesta) 

    }catch(error){
        console.log(error)
        res.send(`Productos no encontrados`)
    }
})

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))