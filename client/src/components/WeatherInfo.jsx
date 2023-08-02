import React from 'react';

const WeatherInfo = ({ data }) => {
  return (
    <div className="weather-info">
      <h2>Weather Conditions for {data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      {/* Add more weather data fields as needed */}
    </div>
  );
};

export default WeatherInfo;
