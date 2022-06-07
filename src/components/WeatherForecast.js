import React from 'react';
import WeatherData from "./WeatherData.js";
import WeatherIcon from "./WeatherIcon.js";

const WeatherForecast = (props) => {
  return (
    <div className="forecast">
    <WeatherIcon icon={props.icon} />
    <WeatherData conditions={props.condition} time={props.time} />
    </div>
  );
};

export default WeatherForecast;