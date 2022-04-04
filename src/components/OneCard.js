import React from 'react';
import { Card } from 'react-bootstrap';
import classes from '../styles/Forecast.module.css'
const OneCard = ({ dt, temp_min, temp_max, main, icon, wind }) => {
  
  const date = new Date(dt);
  // var now = new Date();
  // var days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // console.log('Today ' + days[now.getDay()]);
  return (
    <div className={classes.Card}>
     {/* moment().startOf('day').fromNow(); */}
      <Card.Img
        variant="top"
        
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
      
        <Card.Title>{main}</Card.Title>
        
        <p>
          <span style={{ fontSize: '1rem', fontWeight: '500' }}>
          {date.toLocaleDateString()} 
          </span>
          <br />
          
          {date.toLocaleTimeString()} 
        </p>
        {/* min temp */}
        <p>Min: {temp_min}</p>
        {/* max temp */}
        <p>Max: {temp_max}</p>
        <p>wind: {wind}</p>
      </Card.Body>
    </div>
  );
};
export default OneCard;
