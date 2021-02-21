// Takes format and return time formatted

const getTime = (format) => {
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let formattedTime;
  if (format === '24hr') {
    formattedTime = `${hour}:${minute}`;
  } else {
    let formattedHour;
    if (hour > 12) {
      formattedHour = (parseFloat(hour) - 12);
    } else if (hour === 0) {
      formattedHour = 12;
    } else {
      formattedHour = hour;
    }
    formattedTime = `${formattedHour}:${minute}`;
  }
  return formattedTime;
};

export default getTime;
