import React from 'react';
import CitySelector from './components/CitySelector';
import './App.css';
import {Container} from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import {API_KEY, API_BASE_URL} from './apis/config'
import WeatherList from './components/WeatherList';

// const API_KEY = '1315579e77d9eaa48adf16b7a25a78f5';
const App = () => {
  const {data, error, isLoading, setUrl} = UseFetch();

  const getContent = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2>loading...</h2>
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  };

  return (
    <Container className="App">
      <CitySelector onSearch={(city) => setUrl(`http://api.openweathermap.org//data/2.5/forecast?q=${city}&cnt=7&appid=${API_KEY}`)} />

      {/* show content */}
      {getContent()}
    </Container>
  );
};

export default App;