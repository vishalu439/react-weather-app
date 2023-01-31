import React, { useState, useEffect } from "react";
import styles from './weather.module.css';
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
        <label className={styles.input} htmlfor="city">Enter City</label>
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
          <p>Temperature: {Math.floor(weather.main.temp-273.5)}°C</p>
          <p>Feels Like {Math.floor(weather.main.feels_like-273.5)}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Description: {weather.weather[0].description}</p>
        </div>
      )}
      
    </div>
  );
};
export default Weather;