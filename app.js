const notificationElement = document.querySelector('.weather-notification')
const iconElement = document.querySelector('.weather-icon')
const tempElement = document.querySelector('.temperature-value')
const descElement = document.querySelector('.temperature-description p')
const locationElement = document.querySelector('.location p')


const weather = {}

weather.temperature = { value : "", unit : "Celsius"}

const weather_ = {

    temperature : { 
        value : 18,
        unit : "celsius"
    },

    description : "few clouds",

    iconId : "01d",

    city : "London",

    country : "GB"

}

function weatherDisplay(){

     iconElement.innerHTML = `<img src="icons/${weather.iconId}.png" />`

    tempElement.innerHTML = `<p>${weather.temperature.value} °<span>C</span></p>`

    descElement.innerHTML = weather.description

    locationElement.innerHTML = `${weather.city}, ${weather.country}`
}

// latitude e longitude
let latitude = -27.595414
let longitude = -48.559568
const key = "82005d27a116c2880c8f0fcb866998a0"
let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`

console.log(api)

fetch(api)
    .then(response => {
        let data = response.json()
        return data
    }).then(data => {
        weather.temperature.value = (Math.floor(data.main.temp)-273);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon
        weather.city = data.name;
        weather.country = data.sys.country;
       console.log(data)
        console.log(JSON.stringify(weather))
        console.log(weather.temperature.value)
        console.log(`<img src="icons/${weather.iconId}.png" >`)
        weatherDisplay()
    })








