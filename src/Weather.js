import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {

const [ready, setReady] = useState(false);
const [weather, setWeather] = useState({});

function handleCitySubmit(event) {
    event.preventDefault();
}
function handleApi(response) {
    setReady(true);
    setWeather({
        temp: Math.round(response.data.main.temp),
        tempFeels: Math.round(response.data.main.feels_like),
        wind: Math.round(response.data.wind.speed),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        humidity: Math.round(response.data.main.humidity)
    })
}



if (ready) {
    return (
        <div className="Weather">
        <form className="searchForm" onSubmit={handleCitySubmit}>
            <input type="search" placeholder="Enter city"></input><input type="submit" value="Search"></input>
        </form>
        <br/>
    <h1>
        London
    </h1>
    <ul>
        <li>Sunday 20:00</li>
        <li>{weather.description}</li>
        <li>Temperature: {weather.temp}°C</li>
        <li>Feels like: {weather.tempFeels}°C</li>
        <li>Wind speed: {weather.wind}m/s</li>
        <li>Humidity: {weather.humidity}%</li>
    </ul>


    </div>
    );
} else {
    let city = "Mexico City";
    const apiKey = "de31873c66b8933cfbbc1e0df416d91d";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleApi);
    
    return "Loading";
    
}
}
