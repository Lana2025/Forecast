import React, { useState } from 'react';
import Findcity from './components/Findcity';
import './App.css';
import {Container, FormControl, Button} from 'react-bootstrap';
import Findweather from './components/Findweather';
import Sixdays from './components/Sixdays';




const api = {
  key: "2019a24bf77fd34b8c3b88b01b6fadc9",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const {data, error, isLoading, setUrl} = Findweather();
  const [city, setCity] = useState('');

  const getContent = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2>loading...</h2>
    if(!data) return null;
    return <Sixdays weathers={data.list} />
  };
  
  
  

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)      
      
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setCity('');        
        
      if (result.status === 200) {
          return { success: true, data: result.json() };
        }
        
        return { success: false, error: result.statusText };   
        });
      }
     
}
const Findcity = ({onSearch}) => {
  const [city, setCity] = useState('');

  return (
    <>
      
          <Button  onClick={() => onSearch(city)}>Forecast for 5 days</Button>
        
    </>
  );
};

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  
  return (
    <div className={
      (typeof weather.main != "undefined") ? ((weather.main.temp > 16)
       ? 'app warm' 
       : 'app') 
       : 'app'}>
      <main>
         <div className="search-box">       
            
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyPress={search}  
          />
         
        </div> 
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
            <p>Min temperature</p>
              {Math.round(weather.main.temp_min)}°c
              
            </div>
            <div className="temp">
            <p>Max temperature</p>
              {Math.round(weather.main.temp_max)}°c
              </div>
              <div className="temp">
              <p>Wind.speed</p>
              {weather.wind.speed}
              </div>
              
              
            
            <div className="weather">
              {weather.weather[0].min}</div>
            <div className="weather">{weather.weather[0].max}</div>
            <div className = "sixdays">
            <p>Weather next 5 days every 3 hours</p>
            
            <Findcity onSearch={(city) => setUrl(`http://api.openweathermap.org//data/2.5/forecast?q=London&cnt=40&appid=${api.key}`)} />

          {/* show content */}
          {getContent()}
          
            </div>
            {/* new div goes here, grid for 2 x 3 grid/table for 5 day forecast */}
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
