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
