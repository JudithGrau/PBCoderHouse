class Productos {

    constructor () {
        this.items = []
    }

    get listar() {
        return this.items
    }

    agregar(producto) {
        const newItem = {
            id: this.items.length + 1,
            ...producto
        }
        this.items.push(newItem)

        return newItem
    }

    listarId(id) {
        return this.items.find(prod => prod.id === Number(id))
    }

    borrar(id) {
        if (this.items.length == 0) { return {error: "No hay items cargados."}}
        const item = this.items.find(prod => prod.id === Number(id)) || {error: "Producto no encontrado"}
        this.items = this.items.filter(el => el.id !== Number(id))
        return item
    }

    actualizar(prod, id) {
        if (this.items.length == 0) { return {error: "No hay items cargados."}}
        const {title, price, thumbnail} = prod
        const item = this.items.find(prod => prod.id === Number(id))
        if (item) {
            item.title = title
            item.price = price
            item.thumbnail = thumbnail
            return item
        } else {
            return {error: "Producto no encontrado"}
        }
    }

}


module.exports = new Productos()