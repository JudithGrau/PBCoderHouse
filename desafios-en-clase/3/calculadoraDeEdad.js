//importo la libreria moment
const moment = require('moment')
//creo un objeto moment
const hoy = moment()
const nacimiento = moment("29/11/1975", "DD/MM/YYYY")
//metodo diff permite calcular la diferencia entre 2 fechas, y si es en años o dias
const difYear = hoy.diff(nacimiento, 'years');
const difDays = hoy.diff(nacimiento, 'days');
//establezco el formato que quiero
console.log(`Hoy es ${hoy.format("DD/MM/YYYY")}`)
console.log(`Nací el ${nacimiento.format("DD/MM/YYYY")}`)
console.log(`Desde mi nacimiento han pasado ${difYear} años.`)
console.log(`Desde mi nacimiento han pasado ${difDays} días.`)
