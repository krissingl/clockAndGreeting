import React from 'react';
import { connect } from 'react-redux';
import classes from '../../css/styles.css';
import ToggleFormatButton from '../toggleFormat.jsx';
import Greeting from '../greeting.jsx';
import getTime from '../getTime.js';

class ClockWidget extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: 'Loading Clock...',
      timeOfDay: null,
    };
    this.updateClock = this.updateClock.bind(this);
    this.updateTimeOfDay = this.updateTimeOfDay.bind(this);
  }

  componentDidMount() {
    // Updates the component every second for correct time
    this.interval = setInterval(() => {
      this.updateClock();
      this.updateTimeOfDay();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateClock() {
    const newTime = getTime(this.props.currentFormat);
    this.setState({ currentTime: newTime });
  }

  // Updated the time of day state for greeting
  updateTimeOfDay() {
    let newTimeOfDay;
    const day = new Date();
    const hour = day.getHours();
    if ((hour >= 6) && (hour < 12)) {
      newTimeOfDay = 'morning';
    } else if ((hour >= 12) && (hour < 17)) {
      newTimeOfDay = 'afternoon';
    } else if ((hour >= 17) && (hour < 22)) {
      newTimeOfDay = 'evening';
    } else if ((hour >= 22) || (hour < 6)) {
      newTimeOfDay = 'night';
    }
    this.setState({ timeOfDay: newTimeOfDay });
  }

  render() {
    return (
      <div className={classes.clockWidget}>
        <ToggleFormatButton />
        <div className={classes.clock}>{this.state.currentTime}</div>
        <Greeting timeOfDay={this.state.timeOfDay} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentFormat: state.currentFormat,
});

export default connect(mapStateToProps)(ClockWidget);
