// Takes format and return time formatted

const getTime = (format) => {
  const date = new Date();
  const unformattedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  let formattedTime;
  if (format === '24hr') {
    formattedTime = unformattedTime;
  } else {
    formattedTime = new Date().toLocaleTimeString();
  }
  return formattedTime;
};

export default getTime;
