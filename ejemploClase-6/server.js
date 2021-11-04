const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('./public'))

let elSocketguardado

setInterval(() => {
    if (elSocketguardado) {
        elSocketguardado.emit('chequeo', 'chequeando')
    }
}, 10000);

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})

app.get('/chequeo', (req, res) => {
    if (elSocketguardado) {
        elSocketguardado.emit('chequeo', 'chequeando')
    }
    res.end()
})

// const todos = []
app.get('/spam', (req, res) => {
    io.sockets.emit('spam', 'soy spam!! muejeje')
    // todos.forEach(s => {
    //     s.emit('spam', 'soy spam!! muejeje')
    // })
    res.end()
})

io.on('connection', (socket) => { //"connection" se ejecuta la primera vez que se abre una nueva conexión
    console.log('Usuario conectado') // Se imprimirá solo la primera vez que se ha abierto la conexión
    socket.emit('msgDelServer', 'Este es mi mensaje desde el servidor')

    socket.on('chequeo', resp => {
        console.log(resp)
    })

    elSocketguardado = socket
    // todos.push(socket)
})

httpServer.listen(8080, () => console.log('SERVER ON'))
httpServer.on('error', (error) => { })
