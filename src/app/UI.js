// Este fichero va a ser el encargado de manipular el DOM
// ==============================================================================================
export class UI {
    constructor(){
        this.location = document.getElementById("weather-location");
        this.desc = document.getElementById("weather-description");
        this.string = document.getElementById("weather-string");
        this.humidity = document.getElementById("weather-humidity");
        this.wind = document.getElementById("weather-wind");
        this.dt_txt = document.getElementById("dt_txt");
        this.forecast = document.getElementById("five-days-forecast");
    }
    
    render(weather) {
        this.location.textContent = weather.city.name + ' / ' + weather.city.country;
        this.dt_txt.textContent = weather.list[0].dt_txt;
        this.string.textContent = weather.list[0].main.temp + ' ºC';
        this.humidity.textContent = 'Humidity: ' + weather.list[0].main.humidity + ' % ';
        this.wind.textContent = 'Wind: ' + weather.list[0].wind.speed + 'm/s';
        this.forecast.textContent = this.renderNextFourDaysForecast(weather); 
    }
    
    renderNextFourDaysForecast(weather) {
        let daysForecasts = weather.list;
        console.log('----------');
        daysForecasts.forEach(dayForecast => {
            if (dayForecast != 0) {
                console.log(dayForecast);
                console.log('hola');
            }
        });



        //${weather.list[0].main.temp}`;
    }

} 