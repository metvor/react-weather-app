import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function ForecastDaily(props) {

        function maxTemp() {
          let temperature = Math.round(props.data.temp.max);
          return `${temperature}°`;
        }
      
        function minTemp() {
          let temperature = Math.round(props.data.temp.min);
          return `${temperature}°`;
        }
      
        function day() {
          let date = new Date(props.data.dt * 1000);
          let day = date.getDay();
      
          let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      
          return days[day];
        }


return (
    <div className="col">
    <div className="forecast day">{day()}</div>
    <div className="icon"><WeatherIcon code={props.data.weather[0].icon} size={36} /></div>
    <div className="forecast temp">
        <span className="maxTemp">{maxTemp()} </span>
        <span className="minTemp">{minTemp()}</span>
    </div>
    </div>

);
}