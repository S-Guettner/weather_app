const apiKey = "52fbfc06f33445f7b8e183116221912";

const cityName = "berlin" 


/* ==========fetch of weatherapi.com==========  */




/* ----------fetch for [current].temp_c---------- */

fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`)
    .then(response => response.json())
    .then(data => console.log(data["current"].temp_c));


/* ----------fetch for [location].feelslike_c---------- */

fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London&aqi=no`)
    .then(response => response.json())
    .then(data => console.log(data["current"].feelslike_c));


/* ----------fetch for [location].name (name of City)---------- */

fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`)
    .then(response => response.json())
    .then(data => console.log(data["location"].name));


/* ----------fetch for [location].localtime---------- */

fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`)
    .then(response => response.json())
    .then(data => console.log(data["location"].localtime));


/* ----------fetch for [current].humidity---------- */

fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`)
    .then(response => response.json())
    .then(data => console.log(data["current"].humidity));


/* ----------fetch for [current].wind_kph---------- */

fetch(`http://api.weatherapi.com/v1/current.json?key=52fbfc06f33445f7b8e183116221912&q=${cityName}&aqi=no`)
    .then(response => response.json())
    .then(data => console.log(data["current"].wind_kph));