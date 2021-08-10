import React from "react";

export default function FormattedDate(props) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[props.date.getDay()];
    let hour = props.date.getHours();
    let min = props.date.getMinutes();
    if (hour < 10) {
       hour = `0${hour}`;
    }
    if (min < 10) {
        min = `0${min}`;
      }
    
    return (
    <li>{day} {hour}:{min}</li>
    );

}