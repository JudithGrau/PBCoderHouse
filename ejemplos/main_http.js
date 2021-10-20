const http = require('http')

//creo un servidor con un manejador o listener o controlador(controla el flujo del programa cuando llega un mensaje) de eventos (peticiones) de acuerdo al modelo cliente-servidor
const server = http.createServer((peticion, respuesta) => {
    // console.log(peticion)

    const { url, method } = peticion
    console.log(method, url)

    if (url == '/miscosas' && method == 'GET') {
        respuesta.end('accediendo a mis cosas!')
    } else {
        respuesta.end('url desconocida... ')
    }
})

const srvConnection = server.listen(8080, () => {
    console.log(`ya me conecté al puerto ${srvConnection.address().port}`)
})