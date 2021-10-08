const Contenedor = require('./manejoArchivos')
const db = new Contenedor('miArchivo')

const test = async () => {
    //console.log( await db.save({ id: 1, title: 'remera anime1', price: 2250, thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/903/627/products/hunter-characters1-9275a24c4ee1ee9ba816058149057716-1024-1024.jpg' }))
    //console.log( await db.save({ id: 2, title: 'remera anime2', price: 2250, thumbnail: 'https://d26lpennugtm8s.cloudfront.net/stores/903/627/products/evangelion-remera21-71378e34d033d3339615830795003436-1024-1024.jpg' }))
    //console.log( await db.save({ id: 3, title: 'remera anime3', price: 2250, thumbnail: 'ttps://d26lpennugtm8s.cloudfront.net/stores/903/627/products/himiko-toga1-8755a4706ca5a06c5815710073832545-1024-1024.jpg' }))
    
    //console.log( await db.getAll())
    //console.log( await db.getById(3))
    //console.log( await db.deleteById(2));
    //await db.deleteAll()
    //console.log( await db.getAll())
}

test()