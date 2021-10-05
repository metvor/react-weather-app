import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props) {

    return (
<div className="WeatherInfo">
    <h1 className="text-capitalize">
        {props.data.city}
    </h1>
        <div className="row">
            <div className="col-8">
        <li><FormattedDate date={props.data.date} /></li>
        <li className="text-capitalize">{props.data.description}</li>
        <div className="today-weather">
            <div className="today-icon">
        <WeatherIcon code={props.data.icon} size={52} /> </div>
        <span><Temperature temps={props.data.temp} /></span>
        </div>
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