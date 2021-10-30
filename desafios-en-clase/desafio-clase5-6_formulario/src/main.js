const express = require('express')

const personas = [] //array de personas

const app = express()

app.use(express.urlencoded({ extended: true }))//para formularios

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('inicio', { personas });//pagina donde voy a mostrar un objeto con el array de personas
});

app.post('/personas', (req, res) => {
    personas.push(req.body)//voy cargando las personas
    console.log(personas)
    res.redirect('/')
});

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
