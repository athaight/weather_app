const apiKey = "8b4d320427abe778710968ffa0a03a6c"
const oneCall = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${ apiKey }`;
const geoCords = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${ apiKey }`;
const today = new Date();
let day = String(today.getDate()).padStart(2, '0');
let month = String(today.getMonth() + 1).padStart(2, '0'); 
let year = today.getFullYear();
let hour = String(today.getHours());
let minutes = String(today.getMinutes());

let date = month + '/' + day + '/' + year + ' - ' + hour + ':' + minutes;
console.log(date)

let weather = {
FetchWeather: function(city) {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city + "&units=imperial&appid=" 
        + apiKey
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data))
},
displayWeather: function(data) {
    const { name } = data;
    const { description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { visibility } = data.visibility;
    console.log(name,description,temp,humidity,speed)
    document.querySelector('.city').innerText = 'Weather in ' + name;
    // document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon + '.png';
    document.querySelector('.description').innerText = description;
    document.querySelector('.temp').innerText = temp + "° f";
    document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
    document.querySelector('.wind').innerText = "Wind Speed: " + speed + " mph";
    document.querySelector('.visibility').innerText = "Visibility: " + visibility;
},
search: function () {
    this.FetchWeather(document.querySelector('.search-bar').value);
}
};

document.querySelector('.search button').addEventListener('click', function () {
weather.search();
})