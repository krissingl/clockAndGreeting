import React from 'react';
import classes from '../../css/styles.css';

const ClockWidget = () => {
  console.log('Clock Widget fired');
  return (
    <div className={classes.ClockWidget}>
      <div>Clock Widget</div>
    </div>
  );
};

export default ClockWidget;
