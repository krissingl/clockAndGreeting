import React from 'react';
import classes from '../../css/styles.css';

const QuoteWidget = () => {
  console.log('Quote widget fired');
  return (
    <div className={classes.QuoteWidget}>
      <div>Quote Widget</div>
    </div>
  );
};

export default QuoteWidget;
