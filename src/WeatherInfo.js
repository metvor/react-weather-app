import React from "react";

export default function WeatherInfo(props) {
    return (
<div className="WeatherInfo">
        
    <h1 className="text-capitalize">
        {props.data.city}
    </h1>
        <div className="row">
            <div className="col-8">
        <li>I said hey! What's going on?</li>
        <li className="text-capitalize">{props.data.description}</li>
        <li className="temp">{props.data.temp}°C</li>
        <li>{props.data.icon}</li>
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