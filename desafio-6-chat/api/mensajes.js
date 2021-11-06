const fs = require('fs')

class Mensajes {
    constructor() {
        this.mensajes = []
    }

    get listar() {
        return this.mensajes
    }

    load() {
        try {
            const msgGuardados = JSON.parse( fs.readFileSync('./api/msgs/mensajes.json', 'utf-8') )
            if (msgGuardados) {this.mensajes = msgGuardados}
        } catch {
            this.mensajes = []
        }
    }

    nuevoMensaje(msg) {
        this.mensajes.push({...msg, fyh: new Date().toLocaleString()})
        fs.writeFile('./api/msgs/mensajes.json', JSON.stringify(this.mensajes), (error)=>{
            if (error) {
                throw new Error('Error de escritura')
            } else {
                console.log('Nuevo mensaje creado')
            }
        })
    }
}

module.exports = new Mensajes()