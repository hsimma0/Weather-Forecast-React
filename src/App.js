import React from "react";
import "./styles.css";

//IMPORT DATA
import WeatherForecast from "./components/WeatherForecast"
import weatherArr from "./weatherData";

export default function App() {
  const weather = weatherArr.map((ele, index) => {
    return <WeatherForecast {...ele} key={index} />;
  });
console.log("Andre this is the Weather", weather)
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section>{weather}</section>
    </div>
  );
}
