const fs = require('fs')
const knexLib  = require('knex');

class  ContenedorMensajesSQL {
    constructor (options, nombreTabla){
        this.knex= knexLib(options);
        this.nombreTabla= nombreTabla;
    }

    //para el caso que no exista la tabla de mensajes
    crearTabla=async()=> {
        console.log('Creando en SQLite...')
        return this.knex.schema.dropTableIfExists(this.nombreTabla)
        .finally(() => {
        return this.knex.schema.createTable(this.nombreTabla, table => {
            table.increments('id').primary();
            table.string('emisor', 50).notNullable();
            table.string('fechaHora', 10).notNullable();
            table.string('texto', 50).notNullable();
        })
        })
    }

    getAll= async()=>{
        try{
            return await this.knex(this.nombreTabla).select('*')
        }catch(error){
            console.log('error lectura...')
            throw new Error('No se pudo leer el schema');
        }
    }

    save = async(objeto)=>{ 
        try{
            const obj= ({emisor:objeto.emisor, fechaHora:objeto.fechaHora, texto:objeto.texto})

           
            return await this.knex(this.nombreTabla).insert(objeto)
        }catch{
            throw new Error('No se pudo guardar');
        }
    }

    getById= async(id)=> {
        try{
            const salida= await this.knex(this.nombreTabla).select('*').where('id', id)
            if (salida){
                return salida
            }else{
                return null 
            }
        }catch{
            throw new Error('Error al obtener el Id');
        }
    }

    deleteById= async(id)=>{
        try{
            return await this.knex.from(this.nombreTabla).where('id', id).del()
        }catch{
            throw new Error('Error al obtener al borrar el Id');
        }
    }

    deleteAll= async()=>{
        try{
            return await this.knex.from('mensajes').del();
        } catch(error){
            throw new Error('Error al obtener al borrar todos los objetos');
        }
    }
}

module.exports = ContenedorMensajesSQL;