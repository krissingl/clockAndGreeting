import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import WEATHER_API_KEY from '../../../../config/weatherAPIkey.js';
import classes from '../../css/styles.css';

class WeatherWidget extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: null,
    };
  }

  componentDidMount() {
    axios.get(`api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=${WEATHER_API_KEY}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // componentDidMount() {
  //   axios.get('https://dog.ceo/api/breeds/image/random')
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // }

  render() {
    return (
      <div className={classes.Widget}>
        <div>Weather Widget</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentFormat: state.currentFormat,
});

export default connect(mapStateToProps)(WeatherWidget);
