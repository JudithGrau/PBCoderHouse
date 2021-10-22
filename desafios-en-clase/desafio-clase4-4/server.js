const express = require('express')
const routerMascotas = require("./routerMascotas")//importo
const routerPersonas = require("./routerPersonas")//importo


const app = express()

app.use(express.json())

/* ------------------------------------------------------ */
/* Cargo los routers */

app.use('/api/mascotas', routerMascotas)//a estas rutas le cargo los manejadores
app.use('/api/personas', routerPersonas)

/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
