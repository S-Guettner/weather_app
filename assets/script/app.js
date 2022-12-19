import{apiKey} from "../../hidden/api_key.js";

/* ----------import apiKey from git ignore Folder---------- */






const cityName = "berlin" 


/* ==========fetch of weatherapi.com==========  */




/* ----------fetch for [current].temp_c---------- */
/* ----------data in class temperature---------- */

fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`)
    .then(response => response.json())
    .then(data => document.querySelector(".temperature").innerHTML = (data["current"].temp_c));


/* ----------fetch for [location].feelslike_c---------- */
/* ----------data in class feelsLikeTemp---------- */

fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London&aqi=no`)
    .then(response => response.json())
    .then(data =>  document.querySelector(".feelsLikeTemp").innerHTML=(data["current"].feelslike_c));


/* ----------fetch for [location].name (name of City)---------- */
/* ----------data in class location---------- */

fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`)
    .then(response => response.json())
    .then(data => document.querySelector(".location").innerHTML=(data["location"].name));


/* ----------fetch for [location].localtime---------- */
/* ----------data in class localTime---------- */

fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`)
    .then(response => response.json())
    .then(data => document.querySelector(".localTime").innerHTML=(data["location"].localtime));


/* ----------fetch for [current].humidity---------- */
/* ----------data in class humidity---------- */

fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`)
    .then(response => response.json())
    .then(data => document.querySelector(".humidity").innerHTML=(data["current"].humidity));


/* ----------fetch for [current].wind_kph---------- */
/* ----------data in class windSpeed---------- */

fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`)
    .then(response => response.json())
    .then(data => document.querySelector(".windSpeed").innerHTML=(data["current"].wind_kph));







/* ==========Change Background with input from searchbar========== */


let backgroundImage = document.querySelector(".background").style;
backgroundImage.background = "url(https://source.unsplash.com/random/600×600)"

console.log(backgroundImage);
