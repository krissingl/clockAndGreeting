import React from 'react';
import classes from '../css/styles.css';

const Greeting = ({ timeOfDay }) => {
  let greeting;
  if (timeOfDay === 'morning') {
    greeting = 'Good Morning';
  } else if (timeOfDay === 'afternoon') {
    greeting = 'Good Afternoon';
  } else if (timeOfDay === 'evening') {
    greeting = 'Good Evening';
  } else if (timeOfDay === 'night') {
    greeting = 'Good Night';
  } else {
    greeting = 'Greetings';
  }

  return (
    <div>
      {greeting}
    </div>
  );
};

export default Greeting;
