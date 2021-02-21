import React from 'react';
import classes from '../../css/styles.css';

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

  changeFormat() {
    console.log('Figure out how to change format.');
  }

  render() {
    return (
      <div className={classes.Widget}>
        <button type="button" onClick={this.changeFormat}>12hr</button>
        <div>{this.state.currentTime}</div>
      </div>
    );
  }
}

export default ClockWidget;
