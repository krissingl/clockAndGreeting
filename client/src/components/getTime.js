// Takes format and return time formatted

const getTime = (format) => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();

  let formattedTime;
  if (format === '24hr') {
    formattedTime = `${hour}:${minute}`;
  } else {
    let formattedHour;
    if (hour > 12) {
      formattedHour = (hour - 12);
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
