const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const mensajes = [] //array de mensajes

app.use(express.static('public'))

io.on('connection', socket => {
    console.log('Nuevo cliente conectado!')
    /* Envio los mensajes al cliente que se conectó */

    socket.emit('mensajes', mensajes)//al principio mjes está vacio

    /* Escucho los mensajes enviado por el cliente y se los propago a todos */
    socket.on('mensaje', data => { //cada vez que haya un mje
        mensajes.push({ socketid: socket.id, mensaje: data })// los guardo en el array de mjes
        io.sockets.emit('mensajes', mensajes)//envio el mje a todos los sockets, con la lista actualizada de mjes
    })
})

const PORT = 8080
const connectedServer = httpServer.listen(PORT, function () {
    console.log(`Servidor Http con Websockets escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))
