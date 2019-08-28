module.exports = function (str) {
  return /^\D{1}[^A-Z]{1}/.test(str);
}