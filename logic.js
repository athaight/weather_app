const apiKey = "8b4d320427abe778710968ffa0a03a6c"
const oneCall = "https://api.openweathermap.org/data/2.5/onecall?&units=imperial&";
const geoCords = "http://api.openweathermap.org/geo/1.0/direct?&units=imperial&";
const today = new Date();
let day = String(today.getDate()).padStart(2, '0');
let month = String(today.getMonth() + 1).padStart(2, '0'); 
let year = today.getFullYear();
let hour = String(today.getHours());
let minutes = String(today.getMinutes());

let date = month + '/' + day + '/' + year + ' - ' + hour + ':' + minutes;
console.log(date)

let temp = document.querySelector('temp');
let wind = document.querySelector('wind');
let humidity = document.querySelector('humidity');
let uvi = document.querySelector('uvi');

function getCity(city){
const params = new URLSearchParams({ q: city, appid: apiKey });
fetch(geoCords + params)
.then((response) => response.json())
.then(function  (data) {
    console.log(data);
    

})
}