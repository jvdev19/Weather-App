// Este fichero será el encargado de pedir la información a la API que vamos a utilizar

export class Weather{
    constructor(city, countryCode) {
        this.apikey = '0fcbd8f5e305923f731edf9ffae5c160';
        this.city = city;
        this.countryCode = countryCode;
    }
    
    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }
}