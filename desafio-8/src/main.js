const express= require('express')
const handlebars= require('express-handlebars')

const optionsSQLite = require('./options/SQLite3')
const optionsMysql = require('./options/MysqlDB')

const { Server: HttpServer } = require('http')
const { Server: Socket } = require('socket.io')

const ContenedorProductosSQL = require('./ContenedorProductosSQL.js')
const ContenedorMensajesSQL = require('./ContenedorMensajesSQL.js')

const app = express()
const httpServer = new HttpServer(app)
const io = new Socket(httpServer)

const productos = new ContenedorProductosSQL(optionsMysql, 'productos')
const mensajes =  new ContenedorMensajesSQL(optionsSQLite,'mensajes') 


const inicializar = async()=>{
    await mensajes.crearTabla();
    await productos.crearTabla();
}

inicializar();

io.on('connection', async socket => {
    console.log('Nuevo cliente conectado!');

    socket.emit('productos',await productos.getAll())

    socket.on('updateProducto', async producto => {
        await productos.save(producto)
        io.sockets.emit('productos', await productos.getAll());
    })

    socket.emit('mensajes', await mensajes.getAll())

    socket.on('updateMensaje', async mensaje => {
        await mensajes.save(mensaje)
        io.sockets.emit('mensajes', await mensajes.getAll())
    })
});


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

//  Manejador de plantillas 
app.engine('hbs', handlebars({
    extname: 'hbs',
    defaultLayout: 'default',
    layoutDir: "/views/layouts",
}))


app.set('view engine', 'hbs');
app.set('views', "./views");

//conecto con el servidor
const PORT=8080
const server = httpServer.listen(PORT, () => {
    console.log(`Conectado al puerto ${server.address().port}`)
})
server.on('error', (error) => {
    console.log(error)
})