import React from 'react';
import { connect } from 'react-redux';

const ChangeTempTypeBtn = ({ dispatch, getWeather, format }) => {
  let btnLabel;
  if (format === 'F') {
    btnLabel = '°F';
  } else {
    btnLabel = '°C';
  }
  const updateFormat = () => {
    dispatch({
      type: 'changeTempFormat',
      payload: format,
    });
  };
  return (
    <div>
      <button type="button" onClick={() => { updateFormat(); getWeather(); }}>{btnLabel}</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapDispatchToProps)(ChangeTempTypeBtn);
