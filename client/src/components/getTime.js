// classes?

const getTime = (format) => {
  // Get the local time
  // format time based off provided prop
  // return formatted time
  const time = new Date().toLocaleTimeString();
  return time;
};

export default getTime;
