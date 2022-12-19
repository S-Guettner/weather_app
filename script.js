const apiKey =  "ca5e064db5dde5df36f0b0f103bb4f5c";


/* ==========fetch of weatherapi.com for [current].temp_c==========  */


fetch("http://api.weatherapi.com/v1/current.json?key=52fbfc06f33445f7b8e183116221912&q=London&aqi=no")
    .then(response => response.json())
    .then(data => console.log(data["current"].temp_c));