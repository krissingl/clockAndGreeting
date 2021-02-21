import React from 'react';
import { connect } from 'react-redux';
import classes from '../css/styles.css';

const ToggleFormatButton = ({ dispatch, currentFormat }) => {
  let newFormat;
  if (currentFormat === '12hr') {
    newFormat = '24hr';
  } else {
    newFormat = '12hr';
  }

  const toggleFormat = (format) => {
    dispatch({
      type: 'changeTimeFormat',
      payload: format,
    });
  };

  return (
    <div>
      <button type="button" className={classes.toggleBtn} onClick={() => { toggleFormat(newFormat); }}>{newFormat}</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const mapStateToProps = (state) => ({
  currentFormat: state.currentFormat,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToggleFormatButton);
