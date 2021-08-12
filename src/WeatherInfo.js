import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";

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
        <li className="temp">
            <Temperature temps={props.data.temp} />
        </li>
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