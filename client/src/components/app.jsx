import React from 'react';
import classes from '../css/styles.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'blue',
    };
  }

  render() {
    return (
      <div className={classes.test}>Ollo?</div>
    );
  }
}

export default App;
