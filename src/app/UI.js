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
        this.renderNextFourDaysForecast(weather); 
    }
    
    renderNextFourDaysForecast(weather) {
        let daysForecasts = weather.list;
        console.log('----------');
        let i = 0;
        daysForecasts.forEach(dayForecast => {
            i++;
            console.log(i);
            console.log(dayForecast);
            this.forecast.innerHTML += `<ul>

            <li>
                <i>Fecha:</i> ${dayForecast.dt_txt} <br> 
                <i>Temperatura:</i> <b>${dayForecast.main.temp} º</b> 
            </li>

            </ul>`;
        });



        //${weather.list[0].main.temp}`;
    }

} 