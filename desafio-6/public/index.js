let template = Handlebars.compile(`
        <h2>Vista de Productos</h2>
            <br>
            {{#if hayProductos}} 
                <div class="table-responsive">
                    <table class="table">
                        <tr> <th>Nombre</th> <th>Precio</th> <th>Foto</th></tr>
                        {{#each hayProductos}}
                            <tr> <td>{{this.title}}</td> <td>$ {{this.price}}</td> <td><img width="100" src={{this.thumbnail}} alt="not found"></td> </tr>
                        {{/each}}
                    </table>
                </div>
            {{else}}  
            <h4 class="alert alert-danger">No hay productos</h4>
            {{/if}}
        <a href="/" class="btn btn-info m-3">Volver</a>
`)


const socket = io.connect();

const form = document.getElementById('formulario')
const inputTitle = document.getElementById('input-title')
const inputPrice = document.getElementById('input-price')
const inputImg = document.getElementById('input-img')

form.addEventListener('submit', (e) => {
    e.preventDefault() //evita que se recargue por defecto
    //saco los valores del formulario
    const title = inputTitle.value.trim() //trim( ) elimina los espacios en blanco en ambos extremos del string
    const price = inputPrice.value.trim()
    const thumbnail = inputImg.value.trim()

    if (title.length < 1) {return}
    if (price.length < 1) {return}
    if (thumbnail.length < 1) {return}

    // envio el objeto con socket
    socket.emit('guardar', {
        title: title,
        price: price,
        thumbnail: thumbnail
    })

    inputTitle.value = ''
    inputPrice.value = ''
    inputImg.value = ''
})

// actualizo template con la data del server
socket.on('actualizar', data => {
    let html = template({hayProductos: data})
    document.getElementById("lista-productos").innerHTML = html
});