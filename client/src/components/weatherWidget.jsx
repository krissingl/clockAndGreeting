import React from 'react';
import classes from '../css/styles.css';

const WeatherWidget = () => {
  console.log('Weather Widget Fired');
  return (
    <div className={classes.WeatherWidget}>
      <div>Weather Widget</div>
    </div>
  );
};

export default WeatherWidget;
