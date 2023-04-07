// Este fichero va a ser el encargado de manipular el DOM
// ==============================================================================================
export class UI {
    constructor(){
        this.location = document.getElementById("weather-location");
        this.desc = document.getElementById("weather-description");
        this.string = document.getElementById("weather-string");
        this.humidity = document.getElementById("weather-humidity");
        this.wind = document.getElementById("weather-wind");
        this.fiveDaysForecast = document.getElementById("five-days-forecast");
    }
    
    render(weather) {
        this.location.textContent = weather.city.name + ' / ' + weather.city.country;
        this.desc.textContent = weather.list[0].weather[0].description;
        this.string.textContent = weather.list[0].main.temp + ' ºC';
        this.humidity.textContent = 'Humidity: ' + weather.list[0].main.humidity + ' % ';
        this.wind.textContent = 'Wind: ' + weather.list[0].wind.speed + 'm/s';
        this.fiveDaysForecast.textContent =`Five days forecast:
        ${weather.list[0].main.temp}`; // --> Aquí habrá que hacer un bucle
    }
} 