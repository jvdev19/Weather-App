// Este es el archivo encargado de arrancar la app.
// ============================================================================

// Llamo a las clases JS que necesito para arrancar al app. La sintaxis ente corchetes significa "traerse la clase" así podemos instanciarla más abajo, guardándolas en constantes. 
const { Weather } = require('./Weather');
const { UI } = require('./UI');
const { Store } = require('./Store');

// Incrusto los CSS en el HTML compilado final, a través de los módulos de webpack que he instalado
require ('./assets/css/skins/bootstrap.minty.min.css');
require ('./assets/css/app.css');
// Instancio los objetos, guardándolos en constantes.

// Al ser la primera vez que veo esto, llama la atención. Es una posibilidad más que nos ofrece la sintaxis de los corchetes:

// Guardo las propiedades que se obtienen como resultado de la ejecución del método getLocationData, que pertenece al objeto instanciado que se guarda en la constante store:

const store = new Store();
const {city} = store.getLocationData(); // >> Estos valores los pasamos al método que hace la consulta a la API, del objeto instanciado guardado en la constante weather.

const weather = new Weather(city); // >> Aquí ponemos la localización por defecto. Una mejora chula sería obtener la localización del dispositivo desde el que se muestra la app y setearlo como localización por defecto. 


const ui = new UI();



async function fetchWeather() {
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data);
}

document.getElementById('weather-change-btn').addEventListener('click', function (e) {
    
    // Cogemos los nuevos valores
    const city = document.getElementById('city').value;

    // Cambiamos la localización
    
    // 1. Le pasamos el nuevo valor al objeto instanciado, el cual tenía un método para cambiar sus propiedad city. 
    
    weather.changeLocation(city);
    
    store.setLocationData(city); // >> También pasamos este valor asignado en los campos del formulario al localStorage del navegador, a través del método del que dispone el objeto instanciado store.
    
    // 2. Volvemos a ejecutar el método que llama a la API, con el valor del objeto cambiado.
    fetchWeather();

    // Nos aseguramos de que no recargue la página
    e.preventDefault();
});

document.addEventListener('DOMContentLoaded', fetchWeather);