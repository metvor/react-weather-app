import React from "react";

export default function WeatherInfo(props) {
    return (
<div className="WeatherInfo">
        
    <h1>
        {props.defaultCity}
    </h1>
        <div className="row">
            <div className="col-6">
        <li>Sunday 20:00</li>
        <li>{props.data.description}</li>
        <li className="temp">{props.data.temp}°C</li>
        <li>{props.data.icon}</li>
        </div>
            <div className="col-6">
        <li>Feels like: {props.data.tempFeels}°C</li>
        <li>Wind speed: {props.data.wind}m/s</li>
        <li>Humidity: {props.data.humidity}%</li>
        </div>

</div>
    </div>
    );
}