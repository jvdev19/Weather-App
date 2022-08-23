// Este fichero será el encargado de pedir la información a la API que vamos a utilizar
// La web de la que sacamos la API es openweathermap.org, que proporciona varias APIS (de pago y gratis)
// la que nosotros vamos a utilizar es una gratuita que se llama "Current Weather Data". Es importante
// saber cuál de ellas es para mirar la doc, y por si volvemos a entrar a este proyecto pasado un tiempo.

export class Weather{
    constructor(city, countryCode) {
        this.apikey = '0fcbd8f5e305923f731edf9ffae5c160';
        this.city = city;
        this.countryCode = countryCode;
    }
    
    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }
    
    changeLocation(city, countryCode){
        this.city = city;
        this.countryCode = countryCode;
    }
}