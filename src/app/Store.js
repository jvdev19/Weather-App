// Este fichero sirve para almacenar la información en el localStorage del navegador
// ==============================================================================================
export class Store {
    constructor(){
        this.city;
        this.countryCode;
        this.defaultCity = 'London'; // >> Definimos la ciudad por defecto
        this.defaultCountry = 'uk'; // >> Definimos
    }

    getLocationData(){ // >> Recupera y muestra los valores almacenado en el navegador.
        if (localStorage.getItem('city') === null) { // >> Me aseguro de que siempre haya un valor por defecto.
            this.city = this.defaultCity; // >> Si city es igual a null, cojo la propiedad defaultCity del objeto instanciado.
        } else {
            this.city = localStorage.getItem('city'); // >> Si city no es null, le pido a localStorage el valor de city
        }

        if (localStorage.getItem('countryCode') === null) { // >> Lo mismo para countryCode
            this.countryCode = this.defaultCountry;
        } else {
            this.countryCode = localStorage.getItem('countryCode');            
        }

        return { // >> Retornamos un objeto con los valores definitivos, de tal manera que podamos utilizarlos desde otras partes de la app
            city: this.city,
            countryCode: this.countryCode
        }
    }

    setLocationData(city, countryCode) { // >> Registra unos valores en el localStorage del navegador. 
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }
}