const socket = io();//desde el cliente al servidor, voy a hacer un emit

const input = document.querySelector('input')
document.querySelector('button').addEventListener('click', () => {//busco el btn, le agrego un escuchador de eventos
    socket.emit('mensaje', input.value);//emito el valor del input
})

socket.on('mensajes', msjs => {
    const mensajesHTML = msjs
        .map(msj => `SocketId: ${msj.socketid} -> Mensaje: ${msj.mensaje}`)
        .join('<br>')
    document.querySelector('p').innerHTML = mensajesHTML//reemplaza el html por uno que armé(actualiza con los mjes que van llegando)
});
