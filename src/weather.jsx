import React, { useState, useEffect } from "react";
import styles from './weather.module.css';
import Weather1 from './weather1';
let key="fb9a1444ba0719551b596b9e04aa8a7a"
const Weather = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("London");

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      });
      console.log(weather)
  }, [city]);

  return (
    <div>
      <form>
        <label className={styles.input1} htmlfor="city">Enter City</label>
        <input
         name="city"
          className={styles.input}
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </form>
      {weather.main && (
        <div className={styles.container}>
          <h1>{weather.name} {weather.sys.country}</h1>
          <h1>Temperature: {Math.floor(weather.main.temp-273.5)}°C</h1>
          <h1>Feels Like {Math.floor(weather.main.feels_like-273.5)}°C</h1>
          <h1>Humidity: {weather.main.humidity}%</h1>
          <h1>Description: {weather.weather[0].description}</h1>
        </div>
      )||<Weather1/>}
      
    </div>
  );
};
export default Weather;