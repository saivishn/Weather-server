import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onWeatherData }) => {
  const [location, setLocation] = useState('');

  const handleWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=c7832139b23835263beb6ec1e88834b6`
      );
      const { lat, lon } = response.data[0];

      // Call the backend API passing latitude and longitude
      const weatherResponse = await axios.get(
        `http://localhost:5000/api/weather?lat=${lat}&lon=${lon}`
      );

      onWeatherData(weatherResponse.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter city"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleWeatherData}>Search</button>
    </div>
  );
};

export default SearchBar;
