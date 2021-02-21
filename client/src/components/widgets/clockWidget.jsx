import React from 'react';
import { connect } from 'react-redux';
import classes from '../../css/styles.css';
import ToggleFormatButton from '../toggleFormat.jsx';
import getTime from '../getTime.js';

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
    console.log(`Current Format: ${this.props.currentFormat}`);
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

const mapStateToProps = (state) => ({
  currentFormat: state.currentFormat,
});

export default connect(mapStateToProps)(ClockWidget);
