// Takes format and return time formatted

const getTime = (format) => {
  // Get Date and Time as numbers
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();

  // Get Suffix for 12hr format
  let suffix;
  if (hour < 12) {
    suffix = 'AM';
  } else {
    suffix = 'PM';
  }

  // if hour or minute are a single digit affix a zero to the front
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }

  // Format time based off the given format
  let formattedTime;
  if (format === '24hr') {
    formattedTime = `${hour}:${minute}`;
  } else {
    let formattedHour;
    if (hour > 12) {
      formattedHour = (parseFloat(hour) - 12);
    } else if (hour === '00') {
      formattedHour = 12;
    } else {
      formattedHour = hour;
    }
    formattedTime = `${formattedHour}:${minute} ${suffix}`;
  }
  return formattedTime;
};

export default getTime;
