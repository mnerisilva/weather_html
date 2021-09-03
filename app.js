const notificationElement = document.querySelector('.weather-notification')
const iconElement = document.querySelector('.weather-icon')
const tempElement = document.querySelector('.temperature-value')
const descElement = document.querySelector('.temperature-description p')
const locationElement = document.querySelector('.location p')


const weather = {

    temperature : { 
        value : 18,
        unit : "celsius"
    },

    descriprion : "few clouds",

    iconId : "01d",

    city : "London",

    country : "GB"

}

function showWeather(){

    notificationElement.innerHTML = 'xxx';

    // iconElement.innerHTML = `<img src=icons/${weather.iconId}.png`
    iconElement.innerHTML = weather.iconId

    tempElement.innerHTML = weather.temperature.value

    descElement.innerHTML = weather.descriprion

    locationElement.innerHTML = `${weather.city}, ${weather.country}`
}

showWeather()