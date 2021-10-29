const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cargo el modulo handlebars
const handlebars = require('express-handlebars')

//configuracion de handlebars
app.engine(
    'hbs', //nombre referencia a la plantilla
    handlebars({ //funcion de configuracion handlebars
        extname: ".hbs", //extension a utilizar
        defaultLayout: "index.hbs", //plantilla principal
        layoutsDir: __dirname + "/views/layouts", //ruta a la plantilla principal
        partialsDir: __dirname + "/views" //ruta a las plantillas parciales
    })
)

//motor de plantilla que se utiliza
app.set('view engine', 'hbs')
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