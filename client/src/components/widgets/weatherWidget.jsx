import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import WEATHER_API_KEY from '../../../../config/weatherAPIkey.js';
import classes from '../../css/styles.css';
import ChangeTempTypeBtn from '../changeTempType.jsx';

class WeatherWidget extends React.Component {
  constructor() {
    super();
    this.state = {
      // Change City here to get localized weather
      city: 'Boise',
      temp: 'Loading Temperature..',
      tempMax: '',
      tempMin: '',
      weather: 'Loading Weather...',
      iconUrl: '',
    };
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    this.getWeather();
  }

  getWeather() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&?units=metric&APPID=${WEATHER_API_KEY}`)
      .then((response) => {
        const { data } = response;
        const kelvinTemps = [
          data.main.temp,
          data.main.temp_min,
          data.main.temp_max,
        ];
        if (this.props.tempFormat === 'F') {
          // Kelvin to Fahrenheit 1.8(K - 273) + 32
          const fahren = `${Math.floor(1.8 * (kelvinTemps[0] - 273) + 32)}°F`;
          const fahrenMin = `low: ${Math.floor(1.8 * (kelvinTemps[1] - 273) + 32)}°F`;
          const fahrenMax = `high: ${Math.floor(1.8 * (kelvinTemps[2] - 273) + 32)}°F`;
          // Set state to Fahrenheit temperatures
          this.setState({ temp: fahren });
          this.setState({ tempMin: fahrenMin });
          this.setState({ tempMax: fahrenMax });
        } else {
          // Kelvin to Celsius (K - 273.15)
          const celsius = `${Math.floor(kelvinTemps[0] - 273.15)}°C`;
          const celsiusMin = `low: ${Math.floor(kelvinTemps[1] - 273.15)}°C`;
          const celsiusMax = `high: ${Math.floor(kelvinTemps[2] - 273.15)}°C`;
          // Set state to Celsius temperatures
          this.setState({ temp: celsius });
          this.setState({ tempMin: celsiusMin });
          this.setState({ tempMax: celsiusMax });
        }

        // Set weather description and weather icon
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
          <div className={classes.mainTemp}>
            {this.state.temp}
          </div>
          <div>
            {this.state.tempMin}
          </div>
          <div>
            {this.state.tempMax}
          </div>
        </div>
        <div className={classes.weatherBox}>
          <img src={this.state.iconUrl} alt="Weather Icon" className={classes.weatherIcon} />
          <div>
            {this.state.weather}
          </div>
          <div className={classes.tempFormatBox}>
            <ChangeTempTypeBtn format="F" getWeather={this.getWeather} />
            <ChangeTempTypeBtn format="C" getWeather={this.getWeather} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentFormat: state.currentFormat,
  tempFormat: state.tempFormat,
});

export default connect(mapStateToProps)(WeatherWidget);
