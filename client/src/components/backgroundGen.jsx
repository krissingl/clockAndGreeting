// import React from 'react';
// import classes from '../css/styles.css';
import axios from 'axios';

const backgroundUrlGenerator = () => {
  let url;

  axios.get('www.splashbase.co/api/v1/images/random')
    .then((response) => {
      url = response.data.url;
    })
    .catch((error) => {
      console.log(error);
    });

  return url;
};

export default backgroundUrlGenerator;
