// Este fichero será el encargado de pedir la información a la API que vamos a utilizar
// ==============================================================================================

// La web de la que sacamos la API es openweathermap.org, que proporciona varias APIS (de pago y gratis)
// la que nosotros vamos a utilizar es una gratuita que se llama "Current Weather Data". Es importante
// saber cuál de ellas es para mirar la doc, y por si volvemos a entrar a este proyecto pasado un tiempo.

export class Weather{
    constructor(city) {
        this.apikey = '0fcbd8f5e305923f731edf9ffae5c160';
        this.city = city;
    }
    
    async getWeather() {
        // URL VERSIÓN ANTERIOR ---> Anotación, borrar
        // const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
        
        // URL EJEMPLO PARA FORECAST 5 DAYS ---> Anotación, borrar
        // `https://api.openweathermap.org/data/2.5/forecast?q=New%20York&appid=<your-api-key>&cnt=5`;


        // URL MODIFICADA DESDE LA PRIMERA VERSIÓN PARA QUE SAQUE EL FORECAST DE 5 DAYS
        const URI = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city},${this.country}&appid=${this.apikey}&units=metric&cnt=5`;
        
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }
    
    changeLocation(city){
        this.city = city;
    }
}