import React from "react";
const WeatherData = ({conditions, time}) => {
  return(
    <div className="data">
    <h5>Conditions: {conditions}</h5>
    <h3>Time: {time}</h3>
    </div>
  )
}

export default WeatherData