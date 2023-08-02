import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherInfo from './components/WeatherInfo';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <div className="App">
      <h1>Weather Application</h1>
      <SearchBar onWeatherData={handleWeatherData} />
      {weatherData && <WeatherInfo data={weatherData} />}
    </div>
  );
};

export default App;
