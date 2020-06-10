var colors = require('colors');

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
const message = (type, message) => {
  if (type === 'error') {
    return `Failed to create ${message} file.`.red;
  }
  return `Component's ${message} created!`.green;
};

module.exports = { capitalizeFirstLetter, message };
