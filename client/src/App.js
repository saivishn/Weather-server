import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherInfo from './components/WeatherInfo';
import './weather.css';
import bgvideo from '../src/Videos/cloud.mp4';
const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <div className="App">
    
      <video autoPlay loop muted id='video'>
       
        <source src={bgvideo} type='video/mp4'/>
      </video>
      <h1>Weather Application</h1>
      <SearchBar onWeatherData={handleWeatherData} />
      {weatherData && <WeatherInfo data={weatherData} />}
    </div>
  );
};

export default App;
