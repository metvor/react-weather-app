import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDaily from "./ForecastDaily";

export default function Forecast(props) {


const [ready, setReady] = useState(false);
const [forecast, setForecast] = useState(null);


function handleForecast(response) {
    setForecast(response.data.daily);
    setReady(true);
    
}

if (ready) {
    return (
      <div className="Forecast">
      <div className="row">
		{forecast.map(function (dailyForecast, index) {
            if (index < 4) {
                return (  
                    <div className="col" key={index}>
                <ForecastDaily data={dailyForecast}/>
                </div>
 );
}
})}
</div>
</div>
);    
} else {
    let apiKey = "de31873c66b8933cfbbc1e0df416d91d";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);
    return "Loading";
    }
}
