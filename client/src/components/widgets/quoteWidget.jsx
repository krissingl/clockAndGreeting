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
        const endOfList = response.data.length - 1;
        const randomNum = Math.floor((Math.random() * endOfList) + 1);
        const msg = response.data[randomNum].text;
        let auth = response.data[randomNum].author;
        if (auth === null) {
          auth = 'anoymous';
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
      <div className={classes.Widget}>
        <div>{this.state.quoteMsg}</div>
        <div>{`--${this.state.quoteAuthor}`}</div>
        <div>
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
