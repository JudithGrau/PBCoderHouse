const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const productos = require('./api/productos')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8080

//indicamos que queremos cargar los archivos estáticos que se encuentran en dicha carpeta
app.use(express.static('public'))

//esta ruta carga nuestro archivo index en la raíz de la misma
app.get('/', (req, res) => {
    res.sendFile('index', { root: __dirname });
});

app.post('/api/productos/guardar', (req, res) => {
    productos.agregar(req.body)
    res.redirect('/')
})

io.on('connection', (socket) => { //"connection" se ejecuta la primera vez que se abre una nueva conexión
    console.log("Usuario conectado") //se imprimirá solo la primera vez que se ha abierto la conexión
    socket.emit('actualizar', productos.listar)//"actualizar": nombre del evento

    socket.on('guardar', (data) => { //"socket.on": escucha
        productos.agregar(data)
        io.sockets.emit('actualizar', productos.listar) //"sockets.emit": emite al servidor
    })
})

//servidor funcionando en el puerto 8080
http.listen(PORT, () => {
    console.log('Servidor escuchando en http://localhost:'+ PORT);
});