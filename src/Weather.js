import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {

const [weatherdata, setWeatherdata] = useState({});
const [ready, setReady] = useState(false);
const [city, setCity] = useState(props.defaultCity);  

function handleApi(response) {
    console.log(response.data);
    setWeatherdata({
        temp: Math.round(response.data.main.temp),
        tempFeels: Math.round(response.data.main.feels_like),
        wind: Math.round(response.data.wind.speed),
        description: response.data.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        humidity: Math.round(response.data.main.humidity),
        city: response.data.name,
        date: new Date((response.data.dt + response.data.timezone - 3600) * 1000)
    });
    setReady(true);
}

function handleCitySubmit(event) {
    event.preventDefault();
    apiSearch();
}

function changeCity(event) {
setCity(event.target.value);
}

function apiSearch() {
    const apiKey = "de31873c66b8933cfbbc1e0df416d91d";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleApi);
}




if (ready) {
    return (
        <div className="Weather">
        <form className="searchForm" onSubmit={handleCitySubmit}>
            <input type="search" placeholder="Enter city" onChange={changeCity} autoFocus="on"></input><input type="submit" value="Search"></input>
        </form>
        <br/>
        <WeatherInfo data={weatherdata}/>
        </div>
    );
} else {
    apiSearch();
    return "Loading";
}
}
