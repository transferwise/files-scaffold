const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);
const message = (type, message) => {
  if (type === "error") {
    return `Failed to create ${message} file.`;
  }
  return `Component's ${message} created!`;
};

module.exports = { capitalizeFirstLetter, message };
