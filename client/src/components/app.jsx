import React from 'react';
import classes from '../css/styles.css';
import ClockWidget from './widgets/clockWidget.jsx';
import QuoteWidget from './widgets/quoteWidget.jsx';
import WeatherWidget from './widgets/weatherWidget.jsx';
import backgroundUrlGenerator from './backgroundGen.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Inspire',
    };
  }

  render() {
    return (
      <div>
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
          <button type="button">New Background?</button>
        </div>
      </div>
    );
  }
}

export default App;
