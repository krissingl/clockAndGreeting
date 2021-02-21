import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import WEATHER_API_KEY from '../../../../config/weatherAPIkey.js';
import classes from '../../css/styles.css';

class QuoteWidget extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: null,
    };
  }

  componentDidMount() {
    axios.get('https://type.fit/api/quotes')
      .then((response) => {
        const endOfList = response.data.length - 1;
        const randomNum = Math.floor((Math.random() * endOfList) + 1);
        console.log(response.data[randomNum]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className={classes.Widget}>
        <div>Quote Widget</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentFormat: state.currentFormat,
});

export default connect(mapStateToProps)(QuoteWidget);
