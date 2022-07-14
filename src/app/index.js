/* 

INDEX.JS

Este es el archivo encargado de arrancar la app.
Vamos a capturar el evento DOMContentLoaded cuando la app sea cargada

Ahora, el evento DOMContentLoaded escuchará a nuestra función fetchWeather, que será
la que arrancará la funcionalidad principal de la app.

No obstante, la lógica que hará las llamadas a la API estarán en el fichero Weather.js

 // > No se requieren los .js al final y los corchetes son para traernos todos los métodos
// >> La sintaxis de los corchetes son para que la clase ya esté instanciada. De tal manera que ya podamos utilizar todos los métodos
// y propiedades sin tener que llamar a Weather, haciendo Weather.propiedad o Weather.metodo 

*/
const { Weather } = require('./Weather');
require ('./assets/css/skins/bootstrap.minty.min.css');
require ('./assets/css/app.css');

/* Test, luego borrar */
const weather = new Weather('London', 'uk');

async function fetchWeather() {
    const data = await weather.getWeather();
    console.log(data);
}

document.addEventListener('DOMContentLoaded', fetchWeather);