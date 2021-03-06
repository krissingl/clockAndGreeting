import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import classes from '../../css/styles.css';

class QuoteWidget extends React.Component {
  constructor() {
    super();
    this.state = {
      quoteMsg: 'Loading Quote...',
      quoteAuthor: '',
    };
    this.getNewQuote = this.getNewQuote.bind(this);
  }

  componentDidMount() {
    this.getNewQuote();
  }

  getNewQuote() {
    axios.get('https://type.fit/api/quotes')
      .then((response) => {
        // Get random index to select random quote from list
        const endOfList = response.data.length - 1;
        const randomNum = Math.floor((Math.random() * endOfList) + 1);
        // Set quote message and author
        const msg = response.data[randomNum].text;
        let auth = response.data[randomNum].author;
        if (auth === null) {
          auth = 'anonymous';
        }
        this.setState({ quoteMsg: msg });
        this.setState({ quoteAuthor: auth });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className={classes.quoteWidget}>
        <br />
        <div className={classes.quoteBox}>
          <div className={classes.quoteMessage}>{this.state.quoteMsg}</div>
          <div className={classes.quoteAuthor}>{`--${this.state.quoteAuthor}`}</div>
        </div>
        <div className={classes.quoteBtn}>
          <button type="button" onClick={this.getNewQuote}>New Quote</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentFormat: state.currentFormat,
});

export default connect(mapStateToProps)(QuoteWidget);
