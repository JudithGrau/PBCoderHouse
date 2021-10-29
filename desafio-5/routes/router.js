const express = require('express')
const router = express.Router()

const productos = require('../api/productos')

router.get('/productos', (req, res)=>{
    const items = productos.listar
    res.render('vista', {hayProductos: items})
})

router.get('/productos/listar', (req, res)=>{

    const items = productos.listar
    if (items.length > 0) {
        res.json(items)
    } else {
        res.json({
            error: 'No hay productos'
        })
    }
})

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

router.post('/productos', (req, res) => {
    productos.agregar(req.body)
    res.redirect('/')
})

router.put('/productos/:id', (req, res) => {
    const item = productos.actualizar(req.body, req.params.id)
    res.json(item)
})

router.delete('/productos/:id', (req, res) => {
    const item = productos.borrar(req.params.id)
    res.json(item)
})



module.exports = router