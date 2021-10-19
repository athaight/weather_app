const today = new Date();

let dateReadable = today.toDateString();
let date =  dateReadable;

let day = today.getDay();
let month = String(today.getMonth() + 1).padStart(2, '0'); 
let year = today.getFullYear();
let hour = String(today.getHours());
let minutes = String(today.getMinutes());

//TODO how to make in more readable format with day name
let dayOneDay = String(today.getDate() +1).padStart(2, '0')
let dayTwoDay = String(today.getDate() +2).padStart(2, '0')
let dayThreeDay = String(today.getDate() +3).padStart(2, '0')
let dayFourDay = String(today.getDate() +4).padStart(2, '0')
let dayFiveDay = String(today.getDate() +5).padStart(2, '0')

let dateOne = month + '/' + dayOneDay + '/' + year;
let dateTwo = month + '/' + dayTwoDay + '/' + year;
let dateThree = month + '/' + dayThreeDay + '/' + year;
let dateFour = month + '/' + dayFourDay + '/' + year;
let dateFive = month + '/' + dayFiveDay + '/' + year;

// console.log('dayOneDay: ' + dayOneDay + ' dayTwoDay: ' + dayTwoDay)

const fiveDayWeather = document.querySelector("#fiveDayWeather");
// fiveDayWeather.style.display = "none";

const today1 = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+(today.getDate()+1);
const today2 = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+(today.getDate()+2);
const today3 = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+(today.getDate()+3);
const today4 = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+(today.getDate()+4);
const today5 = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+(today.getDate()+5);

const apiKey = "8b4d320427abe778710968ffa0a03a6c"
let geoLoc = "http://api.openweathermap.org/geo/1.0/direct?";
let oneCall = "https://api.openweathermap.org/data/2.5/onecall?";

// TODO Introduce for loop to get data for current day (fiveDay)

// Working properly
function fetchWeather(city) {
    localStorage.setItem("city", JSON.stringify(city));
    storedCities();
    
    const params = new URLSearchParams({ q: city, appid: apiKey });
        fetch(geoLoc + params)
        .then((response) => response.json())
        .then(function (data) {
        const lat = data[0].lat;
        const lon = data[0].lon;

        const params = new URLSearchParams({
            lat: lat,
            lon: lon,
            units: "imperial",
            appid: apiKey,
        });
        return fetch(oneCall + params);
        })
        .then((response) => response.json())
        .then(displayWeather);

}
    
function displayWeather(weather) {
    const city = JSON.parse(localStorage.getItem("city"));
    
    // TODO Why / How : not right/to fix 
    const descr = weather.current.weather[1];
    const description = weather.current.weather.description;
    // console.log(descr)
    // console.log(description)
    
    //All ok below here (except where todos exist)
    const { temp, humidity, visibility, wind_speed:speed } = weather.current;
    // console.log(city,description,temp,humidity,visibility,speed);
    const uvi = weather.current.uvi;
    
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + city + "-City')";
    
    document.querySelector('.city').innerText = city;
    document.querySelector('.date').innerText = date;
    
    // TODO part of above issue with description
    document.querySelector('.description').innerText = description;
    
    document.querySelector('.temp').innerText = temp + "° f";
    document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
    document.querySelector('.wind').innerText = "Wind Speed: " + speed + " mph";
    document.querySelector('.uvi').innerText = "UVI: " + uvi;
    document.querySelector('.visibility').innerText = "Visibility: " + visibility;
    document.querySelector('.weather').classList.remove("loading");
    document.querySelector('.moonPhase').innerText = "Moon Phase: " + weather.daily[0].moon_phase;

    document.querySelector('.dayOneDate').innerText = today1;
    document.querySelector('.dayOneTemp').innerText = "Temp: " + weather.daily[1].temp.max + "° f";
    document.querySelector('.dayOneWind').innerText = "Wind Speed: " + weather.daily[1].wind_speed + " mph";
    document.querySelector('.dayOneHumidity').innerText = "Humidity: " + weather.daily[1].humidity;
    document.querySelector('.dayOneUvi').innerText = "UVI: " + weather.daily[1].uvi;
    document.querySelector('.dayOneMoonPhase').innerText = "Moon Phase: " + weather.daily[1].moon_phase;
    
    document.querySelector('.dayTwoDate').innerText = today2;
    document.querySelector('.dayTwoTemp').innerText = "Temp: " + weather.daily[2].temp.max + "° f";
    document.querySelector('.dayTwoWind').innerText = "Wind Speed: " + weather.daily[2].wind_speed + " mph";
    document.querySelector('.dayTwoHumidity').innerText = "Humidity: " + weather.daily[2].humidity;
    document.querySelector('.dayTwoUvi').innerText = "UVI: " + weather.daily[2].uvi;
    document.querySelector('.dayTwoMoonPhase').innerText = "Moon Phase: " + weather.daily[2].moon_phase;

    document.querySelector('.dayThreeDate').innerText = today3;
    document.querySelector('.dayThreeTemp').innerText = "Temp: " + weather.daily[3].temp.max + "° f";
    document.querySelector('.dayThreeWind').innerText = "Wind Speed: " + weather.daily[3].wind_speed + " mph";
    document.querySelector('.dayThreeHumidity').innerText = "Humidity: " + weather.daily[3].humidity;
    document.querySelector('.dayThreeUvi').innerText = "UVI: " + weather.daily[3].uvi;
    document.querySelector('.dayThreeMoonPhase').innerText = "Moon Phase: " + weather.daily[3].moon_phase;

    document.querySelector('.dayFourDate').innerText = today4;
    document.querySelector('.dayFourTemp').innerText = "Temp: " + weather.daily[4].temp.max + "° f";
    document.querySelector('.dayFourWind').innerText = "Wind Speed: " + weather.daily[4].wind_speed + " mph";
    document.querySelector('.dayFourHumidity').innerText = "Humidity: " + weather.daily[4].humidity;
    document.querySelector('.dayFourUvi').innerText = "UVI: " + weather.daily[4].uvi;
    document.querySelector('.dayFourMoonPhase').innerText = "Moon Phase: " + weather.daily[4].moon_phase;

    document.querySelector('.dayFiveDate').innerText = today5;
    document.querySelector('.dayFiveTemp').innerText = "Temp: " + weather.daily[5].temp.max + "° f";
    document.querySelector('.dayFiveWind').innerText = "Wind Speed: " + weather.daily[5].wind_speed + " mph";
    document.querySelector('.dayFiveHumidity').innerText = "Humidity: " + weather.daily[5].humidity;
    document.querySelector('.dayFiveUvi').innerText = "UVI: " + weather.daily[5].uvi;
    document.querySelector('.dayFiveMoonPhase').innerText = "Moon Phase: " + weather.daily[5].moon_phase;
}

// TODO Figure out why/how : notwork/to work
function uviBgColor() {
   let uviColor = document.querySelector('.uvi');
    if (uvi < 3) {
        uviColor.classList.add("green");
    } else if (uvi < 7) {
        uviColor.classList.add("yellow");
    } else {
        uviColor.classList.add("red");
    };
  }
  uviBgColor();

function search() {
    this.fetchWeather(document.querySelector('.search-bar').value);
} 
    
document.querySelector('.search button').addEventListener('click', function () {
    search();
})

document.querySelector('.search-bar').addEventListener('keyup', function(e) {
    if (e.key == "Enter") {
        search();
    }
});

fetchWeather('Tempe');

function storedCities() {
    let city = JSON.parse(localStorage.getItem("city"));
    const button = document.createElement("button");
    
    button.append(city);
    button.classList.add("recent-search");
    
    document.querySelector("#recent-search").append(button);
}