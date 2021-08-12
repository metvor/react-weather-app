import React, { useState } from "react";

export default function Temperature(props) {

const [unit, setUnit] = useState("celsius")

function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit")
}
function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius")
}

    if (unit === "celsius") {
        return (
        <div>
            {Math.round(props.temps)}<span id="unit">°C | <a href="/" onClick={showFahrenheit} rel="noreferrer">°F</a></span>
        </div>
         );
         } else {
        let fahrenheit = (props.temps * 9/5) + 32
        return (
        <div>
           {Math.round(fahrenheit)} <span id="unit"><a href="/" onClick={showCelsius} rel="noreferrer">°C</a> | °F</span>
        </div>
            
        );
    }

}