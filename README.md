```
 ___       __   _______   ________  _________  ___  ___  _______   ________          ________  ________  ________   
|\  \     |\  \|\  ___ \ |\   __  \|\___   ___\\  \|\  \|\  ___ \ |\   __  \        |\   __  \|\   __  \|\   __  \  
\ \  \    \ \  \ \   __/|\ \  \|\  \|___ \  \_\ \  \\\  \ \   __/|\ \  \|\  \       \ \  \|\  \ \  \|\  \ \  \|\  \ 
 \ \  \  __\ \  \ \  \_|/_\ \   __  \   \ \  \ \ \   __  \ \  \_|/_\ \   _  _\       \ \   __  \ \   ____\ \   ____\
  \ \  \|\__\_\  \ \  \_|\ \ \  \ \  \   \ \  \ \ \  \ \  \ \  \_|\ \ \  \\  \|       \ \  \ \  \ \  \___|\ \  \___|
   \ \____________\ \_______\ \__\ \__\   \ \__\ \ \__\ \__\ \_______\ \__\\ _\        \ \__\ \__\ \__\    \ \__\   
    \|____________|\|_______|\|__|\|__|    \|__|  \|__|\|__|\|_______|\|__|\|__|        \|__|\|__|\|__|     \|__|   
```
## Description:
This application uses the third-party server-side API, <a href="https://openweathermap.org/api/one-call-api" target="_blank">OpenWeather One Call API</a> to retreive weather data for the searched city, stores the city in a recent searches list, includes a five day forecast, and displays a background image based upon the city that was searched. 
The data displayed is: City, Date, Temperature, A Description of the day (i.e., cloudy va. sunny), Wind speed (mph), Humidity, UVI, Visibility, and the current moon phase.

### User Story
The following was provided as a basis for the app creation:
```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```
```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## About the project:
This was a great opportunity to learn about interacting with server side/third party APIs and how to read/use the data retreived from them.

## DEMO:
https://user-images.githubusercontent.com/69359454/137948416-180c6076-b8b9-4a50-b349-54b7a8519039.mp4

### Screenshots:
#### New York:
![Weather_newYork](https://user-images.githubusercontent.com/69359454/137948785-f597d5f5-d8da-456e-8977-a1d58bc01c86.png)
#### Seattle:
![Weather_seattle](https://user-images.githubusercontent.com/69359454/137948799-6d2169b4-30a8-472f-8191-42b317b75a27.png)
#### Tempe:
![Weather_tempe](https://user-images.githubusercontent.com/69359454/137948810-da8089b2-0b72-42bb-a013-fd63a2815e1e.png)
#### Tokyo:
![Weather_tokyo](https://user-images.githubusercontent.com/69359454/137948820-3a05729e-66e3-4bda-8201-604f6db01198.png)

### Technologies:
HTML/CSS/Javascript, OpenWeather API, source.unsplash.com (background images)

### Future Scope:
Refactoring of code will be done in future builds, mobile responsiveness, UVI index color changing, cards that respond to weather changes and display the condition accordingly (i.e., rain image when raining, clouds, etc.) & icons for the current weather / moon phases. I would like to add a moon phase cycle display that highlights the current moon phase as an image.
