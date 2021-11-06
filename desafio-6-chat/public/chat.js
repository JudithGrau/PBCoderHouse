const formMensajes = document.getElementById('form-mensajes')
const msgContainer = document.getElementById('messages')

const text = document.getElementById('texto')
const user = document.getElementById('username')
const btnEnviar = document.getElementById('enviar')

text.addEventListener('input', ()=>{
    btnEnviar.disabled = !text.value.trim()
})
user.addEventListener('input', ()=>{
    text.disabled = !user.value.trim()
})


formMensajes.addEventListener('submit', (e)=> {
    e.preventDefault()

    socket.emit('new-mensaje', {
        user: user.value.trim(),
        text: text.value.trim()
    })

    text.value = ''
    text.focus()

})

socket.on('actualizar-mensajes', (mensajes) => {
    msgContainer.innerHTML = ''

    mensajes.forEach( msg => {
        msgContainer.innerHTML += `
            <div><p><span class="user">${msg.user}: </span><span class="fyh">${msg.fyh} - </span><span class="text">${msg.text}.</span></p></div>
        `
    })
})