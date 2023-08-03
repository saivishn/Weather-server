import React from 'react';
import {BsWind,BsCloudHaze} from 'react-icons/bs'
import { WiHumidity,WiDaySunny, WiDayRain, WiCloud, WiDaySprinkle } from 'react-icons/wi';

const WeatherInfo = ({ data }) => {
  const getWeatherIcon = (weather) => {
    switch (weather) {
      case 'Clear':
        return <WiDaySunny />;
      case 'Clouds':
        return <WiCloud />;
      case 'Rain':
        return <WiDayRain />;
      case 'Drizzle':
        return <WiDaySprinkle/>;
      case 'Haze':
        return <BsCloudHaze/>;
      default:
        return null;
    }
  };

  return (
    <div className="container animate">
      <div className="top">
        <div className="city">
          <p>{data.name}</p>
        </div>

        <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
        </div>

        <div className="description">
          {data.weather ? <b><p>{data.weather[0].main}</p></b> : null}
        </div>
      </div>

      {data.coord && data.coord.lat !== undefined && data.coord.lon !== undefined && (
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like.toFixed()}</p> : null}
            <div style={{ fontSize: '200%' }}>
              {data.weather ? getWeatherIcon(data.weather[0].main) : null}
            </div>
            <p><b>Feels Like</b></p>
          </div>

          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity.toFixed()}</p> : null}
            <div style={{ fontSize: '200%' }}><WiHumidity/></div>
            <p><b>Humidity</b></p>
            <i className="bi bi-moisture" style={{ color: 'red' }}></i>
          </div>

          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed.toFixed()}MPH</p> : null}
            <div style={{ fontSize: '200%' }}><BsWind/></div>
            <p><b>Wind Speed</b></p>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
