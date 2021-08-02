import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo.js";

export default function Weather(props) {

const [ready, setReady] = useState(false);
const [weatherdata, setWeatherdata] = useState({});
const [city, setCity] = useState(props.defaultCity);  

function handleCitySubmit(event) {
    event.preventDefault();
}
function handleApi(response) {
    setReady(true);
    setWeatherdata({
        temp: Math.round(response.data.main.temp),
        tempFeels: Math.round(response.data.main.feels_like),
        wind: Math.round(response.data.wind.speed),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        humidity: Math.round(response.data.main.humidity)
    })
}
function changeCity (event) {
setCity(event.target.value);
alert(city);
}


if (ready) {
    return (
        <div className="Weather">
            <form className="searchForm" onSubmit={handleCitySubmit}>
            <input type="search" placeholder="Enter city" onChange={changeCity}></input><input type="submit" value="Search"></input>
        </form>
        <br/>
        <WeatherInfo data={weatherdata}/>
        </div>
    );
} else {
    const apiKey = "de31873c66b8933cfbbc1e0df416d91d";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleApi);
    
    return "Loading";
    
}
}
