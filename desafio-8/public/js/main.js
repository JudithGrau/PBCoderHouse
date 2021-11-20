const socket = io();

Handlebars.registerHelper('formatDate', function(date) {
    return new Handlebars.SafeString(
        new Date(date).toLocaleString()
    );
});

const formAgregarProductos = document.getElementById("formAgregarProductos")
const formAgregarMensajes = document.getElementById("formAgregarMensajes")

formAgregarProductos.addEventListener('submit', e => {
    e.preventDefault()

    const producto = {
        title: formAgregarProductos [ 0 ].value, 
        price: formAgregarProductos [ 1 ].value, 
        thumbnail: formAgregarProductos [ 2 ].value, 
    }

    socket.emit('updateProducto', producto);
    formAgregarProductos.reset()
})

socket.on('productos', manejarEventoProductos);

async function manejarEventoProductos(productos) {

    const recursoRemoto = await fetch('views/tabla-productos.hbs')
    const textoPlantilla = await recursoRemoto.text()
    const functionTemplate = Handlebars.compile(textoPlantilla)
    const html = functionTemplate({ productos })
    document.getElementById('productos').innerHTML = html
}


formAgregarMensajes.addEventListener('submit', e => {   
    e.preventDefault()
    console.log(formAgregarMensajes [ 0 ].value)
    const mensaje = {
        emisor: formAgregarMensajes [ 0 ].value, 
        fechaHora: new Date(), 
        texto: formAgregarMensajes [ 1 ].value, 
    }

    socket.emit('updateMensaje', mensaje);
    formAgregarMensajes["nuevoMensaje"].value=""
})
socket.on('mensajes', manejarEventoMensajes);

async function manejarEventoMensajes(mensajes) {

    const recursoRemoto = await fetch('views/tabla-mensajes.hbs')
    const textoPlantilla = await recursoRemoto.text()
    const functionTemplate = Handlebars.compile(textoPlantilla)
    const html = functionTemplate({ mensajes })
    document.getElementById('mensajes').innerHTML = html
}