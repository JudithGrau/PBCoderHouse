const express = require('express')
const router = express.Router()

const productos = require('../api/productos')

//devuelve todos los productos
router.get('/productos/', (req, res)=>{

    const items = productos.listar
    if (items.length > 0) {
        res.json(items)
    } else {
        res.json({
            error: 'No hay productos cargados'
        })
    }
})

//devuelve un producto según su id
router.get('/productos/:id', (req, res)=>{
    
    const item = productos.listarId(req.params.id)

    if (item) {
        res.json(item)
    } else {
        res.json({
            error: 'Producto no encontrado'
        })
    }
})

//recibe y agrega un producto, y lo devuelve con su id
router.post('/productos/', (req, res) => {
    const newItem = productos.agregar(req.body)
    res.json(newItem)
})

//recibe y actualiza un producto segun su id
router.put('/productos/:id', (req, res) => {
    const item = productos.actualizar(req.body, req.params.id)
    res.json(item)
})

//elimina un producto segun su id
router.delete('/productos/:id', (req, res) => {
    const item = productos.borrar(req.params.id)
    res.json(item)
})



module.exports = router