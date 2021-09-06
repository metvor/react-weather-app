import axios from "axios";
import React from "react";
import "./Forecast.css";

export default function Forecast(props) {

let apiKey = "de31873c66b8933cfbbc1e0df416d91d";
let lon = props.info.lon;
let lat = props.info.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleForecast);

function handleForecast(response) {
    console.log(response.data)

}

    return (
    <div className="Forecast">
        <div className="row">
            <div className="col">
                <div className="forecast day">Mon</div>
                <div className="forecast icon"><img src={props.info.icon} alt="weather icon" /></div>
                <div className="forecast forecastTemp">19°C 5°C</div>
            </div>
        </div>

    </div>
    );
}