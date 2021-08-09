import React from "react";

export default function WeatherInfo(props) {

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = days[props.data.date.getDay()];
let hour = props.data.date.getHours();
let min = props.data.date.getMinutes();
if (hour < 10) {
   hour = `0${hour}`;
  }
if (min < 10) {
    min = `0${min}`;
  }

    return (
<div className="WeatherInfo">
    <h1 className="text-capitalize">
        {props.data.city}
    </h1>
        <div className="row">
            <div className="col-8">
        <li>{day} {hour}:{min}</li>
        <li className="text-capitalize">{props.data.description}</li>
        <li className="temp">{props.data.temp}°C</li>
        <li><img src={props.data.icon} alt="weather icon" /></li>
        </div>
            <div className="col-4">
        <li>Feels like: {props.data.tempFeels}°C</li>
        <li>Wind speed: {props.data.wind}m/s</li>
        <li>Humidity: {props.data.humidity}%</li>
        </div>

        </div>
</div>
    );
}