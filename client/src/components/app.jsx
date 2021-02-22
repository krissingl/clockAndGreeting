import React from 'react';
import axios from 'axios';
import classes from '../css/styles.css';
import ClockWidget from './widgets/clockWidget.jsx';
import QuoteWidget from './widgets/quoteWidget.jsx';
import WeatherWidget from './widgets/weatherWidget.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Inspire',
      backgroundImgUrl: '',
    };
    this.backgroundUrlGenerator = this.backgroundUrlGenerator.bind(this);
  }

  componentDidMount() {
    this.backgroundUrlGenerator();
  }

  backgroundUrlGenerator() {
    let url;
    axios.get('http://www.splashbase.co/api/v1/images/random')
      .then((response) => {
        url = response.data.url;
        this.setState({ backgroundImgUrl: url });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.backgroundImgUrl);
    const backgroundStyle = {
      backgroundImage: `url(${this.state.backgroundImgUrl})`,
      backgroundSize: 'cover',
      height: '100vh',
      margin: '0%',
    };
    return (
      <div style={backgroundStyle}>
        <div className={classes.header}>
          <h1>{this.state.message}</h1>
        </div>
        <div className={classes.topBox}>
          <QuoteWidget />
          <WeatherWidget />
        </div>
        <div className={classes.bottomBox}>
          <ClockWidget />
        </div>
        <div>
          <button type="button" onClick={this.backgroundUrlGenerator}>New Background?</button>
        </div>
      </div>
    );
  }
}

export default App;
