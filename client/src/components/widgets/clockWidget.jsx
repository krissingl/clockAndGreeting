import React from 'react';
import classes from '../../css/styles.css';
import ToggleFormatButton from '../toggleFormat.jsx';

class ClockWidget extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: new Date().toLocaleTimeString(),
    };
    this.updateClock = this.updateClock.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateClock() {
    this.setState({ currentTime: new Date().toLocaleTimeString() });
  }

  render() {
    return (
      <div className={classes.Widget}>
        <ToggleFormatButton />
        <div>{this.state.currentTime}</div>
      </div>
    );
  }
}

export default ClockWidget;
