// Este es el archivo encargado de arrancar la app.
const { Weather } = require('./Weather');
const { UI } = require('./UI');
require ('./assets/css/skins/bootstrap.minty.min.css');
require ('./assets/css/app.css');

const weather = new Weather('London', 'uk');
const ui = new UI();

async function fetchWeather() {
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data);
}

document.getElementById('weather-change-btn').addEventListener('click', function (e) {
    
    // Cogemos los nuevos valores
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;

    // Cambiamos la localización
    
    // 1. Le pasamos los nuevos valores al objeto instanciado, el cual tenía un método para cambiar sus propiedades
    //    city y countryCode. 
    weather.changeLocation(city, countryCode); 
    
    // 2. Volvemos a ejecutar el método que llama a la API, con los valores del objeto cambiados.
    fetchWeather();

    // Nos aseguramos de que no recargue la página
    e.preventDefault();
});

document.addEventListener('DOMContentLoaded', fetchWeather);