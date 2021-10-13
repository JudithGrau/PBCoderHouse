class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    getFullName(){
        return (`${this.nombre} ${this.apellido}`)
    }
    addMascota(nuevaMascota){
        this.mascotas.push(nuevaMascota)
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(nuevoLibro){
        this.libros.push(nuevoLibro)
    }
    getBookNames(){
        return this.libros.map(elemento => elemento.nombre)
    }

}

//------------------------Testing-------------------
const mascotas = ['gato', 'perro']
const usuario = new Usuario('Hernan', 'Calvo', [], mascotas)
usuario.addMascota('canario')


usuario.addBook({
    nombre:'Bodas de sangre',
    autor: 'Federico García Lorca'
})
usuario.addBook({
    nombre:'Rayuela',
    autor: 'Julio Cortázar'
})


/* console.log(usuario.getFullName());
console.log(usuario.mascotas);
console.log(usuario.countMascotas());
console.log(usuario.libros);
console.log(usuario.getBookNames()); */

//-----------------------------------------------------------------------------------------
/* Y obtenga la siguiente información de dicho array
A) Los nombres de los productos en un string separados por comas.
B) El precio total
C) El precio promedio
D) El producto con menor precio
E) El producto con mayor precio
F) Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola

Aclaración: todos los valores monetarios serán expresados con 2 decimales */


//----------------------------------------------------------------------------------
/* const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

function getNombres(productos){
    const nombres = []
    for(const producto of productos){
        nombres.push(producto.nombre)
    }
    //const total = productos.reduce((acum,prod)=> prod.precio + acum, 0)
    return nombres.join(', ')
}

function getPrecioTotal(productos){
    let total = 0
    for(const producto of productos){
        total += producto.precio
    }
    //const total = productos.reduce((acum, prod)=> prod.precio + acum, 0)
    return total
}

function getPrecioPromedio(productos){
    return getPrecioTotal(productos) / productos.length
}
function getProdPrecioMinimo(productos){
    if (productos.length===0){
        throw new Error('no se puede calcular el minimo de un array vacío')
    }
    let min = productos[0].precio
    let prod = productos[0]
    for(const producto of productos){
        if(producto.precio < min){
            min = producto.precio
            prod = producto
        }
    }
    return prod
}
function getProdPrecioMaximo(productos){
    if (productos.length===0){
        throw new Error('no se puede calcular el minimo de un array vacío')
    }
    let min = productos[0].precio
    let prod = productos[0]
    for(const producto of productos){
        if(producto.precio > max){
            max = producto.precio
            prod = producto
        }
    }
    return prod
}
function to2decimales(valor){
    return Number(valor.toFixed(2))
}

const info={
    nombres: getNombres(productos),
    total: to2decimales(getPrecioTotal(productos)),
    promedio: to2decimales(getPrecioPromedio(productos))
}
console.log(info) */