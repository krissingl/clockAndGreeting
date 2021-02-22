import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import WEATHER_API_KEY from '../../../../config/weatherAPIkey.js';
import classes from '../../css/styles.css';

class WeatherWidget extends React.Component {
  constructor() {
    super();
    this.state = {
      temp: 'Loading Temperature..',
      tempMax: '',
      tempMin: '',
      weather: 'Loading Weather...',
      iconUrl: '',
    };
  }

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Boise&?units=metric&APPID=${WEATHER_API_KEY}`)
      .then((response) => {
        const { data } = response;

        // Kelvin to Fahrenheit 1.8(K - 273) + 32
        const kelvinTemps = [
          data.main.temp,
          data.main.temp_min,
          data.main.temp_max];
        const fahren = `${Math.floor(1.8 * (kelvinTemps[0] - 273) + 32)}°F`;
        const fahrenMin = `min ${Math.floor(1.8 * (kelvinTemps[1] - 273) + 32)}°F`;
        const fahrenMax = `max ${Math.floor(1.8 * (kelvinTemps[2] - 273) + 32)}°F`;
        // Set state to Fahrenheit temperatures
        this.setState({ temp: fahren });
        this.setState({ tempMin: fahrenMin });
        this.setState({ tempMax: fahrenMax });

        const weatherDescrip = data.weather[0].description;
        const weatherIcon = data.weather[0].icon;
        const weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        this.setState({ weather: weatherDescrip });
        this.setState({ iconUrl: weatherIconUrl });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className={classes.WeatherWidget}>
        <div className={classes.tempBox}>
          <div>
            {this.state.temp}
          </div>
          <div>
            {this.state.tempMin}
          </div>
          <div>
            {this.state.tempMax}
          </div>
        </div>
        <div>
          <img src={this.state.iconUrl} alt="Weather Icon" />
          <div>
            {this.state.weather}
          </div>
          <div>
            {'F° C°'}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentFormat: state.currentFormat,
});

export default connect(mapStateToProps)(WeatherWidget);
