let city = document.querySelector('.city')
let temp = document.querySelector('.temp')
let weather = document.querySelector('.weather')
let button = document.querySelector('button')


button.addEventListener('click', changeText)


function changeText(){
console.log("clicked");

let success = (position)=>{
console.log(position);
let latitude = position.coords.latitude
let longitude = position.coords.longitude
console.log(`latitude is ${latitude} and longitude is ${longitude}`);

let geoApi = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&` +
`lon=${longitude}&appid=7a082d64d401039fac18edf10c6a64a1`

fetch(geoApi)
.then(res=>res.json())
.then(data=>{
    console.log(data);

    let cityName = data["name"]
    let tempStatus = `${((data.main.temp)-(273.15)).toFixed(2)} degree celcius`
    let weatherStatus = data.weather[0].main

    city.innerText=`Your City is ${cityName}`
    temp.innerText=`Temperature is ${tempStatus}`
    weather.innerText=`Weather is ${weatherStatus}`
})

console.log(`${latitude} ${longitude}`);
}

let error = ()=>{
console.log('unable to find location');
}

navigator.geolocation.getCurrentPosition(success, error)

}