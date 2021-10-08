const fs = require('fs')

class Contenedor {
    constructor (nombreArchivo){
        this.ruta = nombreArchivo
    }

    save = async persona => {
        const arrContenedor = await this.getAll()

        arrContenedor.push(persona)

        try {
            await fs.promises.writeFile(this.ruta, JSON.stringify(arrContenedor, null, 2))
            return persona.nombre 
        } catch (error) {
            throw new Error('No se pudo guardar')
        }
    }

    getAll = async () => {
        try {
            const contenido = await fs.promises.readFile(this.ruta, 'utf-8')           

            return JSON.parse(contenido)

        } catch (error) {
            await fs.promises.writeFile(this.ruta, JSON.stringify([], null, 2))
            const contenido = await fs.promises.readFile(this.ruta, 'utf-8')
            return JSON.parse(contenido)
        }
    }


    getById = async id => {
        const arrContenedor = await this.getAll()

        const idBuscado = arrContenedor.find( p => p.id === id)

        return idBuscado

    }

    deleteById = async id => {
        const arrContenedor = await this.getAll() 
        const nuevoArreglo = arrContenedor.filter(p => p.id !== id)

        try {
            await fs.promises.writeFile(this.ruta, JSON.stringify(nuevoArreglo, null, 2))
        } catch (error) {
            throw new Error('No se pudo actualizar', error)
        }
    }

    deleteAll = async () => {
        return await fs.promises.writeFile(this.ruta, JSON.stringify([], null, 2))
    }
}

module.exports = Contenedor

