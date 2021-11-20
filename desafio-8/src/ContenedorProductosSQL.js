const fs = require('fs')
const knexLib  = require('knex');

class  ContenedorProductosSQL {
    constructor (options,nombreTabla){
        this.knex=  knexLib(options);
        this.nombreTabla= nombreTabla
    }

    crearTabla=async()=> {
        console.log('creando tabla de MySQL')
        return this.knex.schema.dropTableIfExists(this.nombreTabla)
        .finally(() => {
        return this.knex.schema.createTable(this.nombreTabla, table => {
            table.increments('id').primary();
            table.string('title', 50).notNullable();
            table.float('price');
            table.string('thumbnail', 150).notNullable();
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
            const obj= ({title:objeto.title, price:objeto.price, thumbnail:objeto.thumbnail})

            return await this.knex(this.nombreTabla).insert(obj)
        }catch{
            throw new Error('No se pudo guardar');
        }
    }

    getById= async(id)=> {
        try{
            const salida= await this.knex(this.nombreTabla).select('*').where('id',id)
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
            return await this.knex.from(this.nombreTabla).del();
        } catch(error){
            throw new Error('Error al obtener al borrar todos los objetos');
        }
    }
}

module.exports= ContenedorProductosSQL;