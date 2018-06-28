module.exports = function (str) {
  // TODO
  // answer 1
  return /^[\D][^A-Z]/.test(str);
  // answer 2
  // return /^[^0-9][^A-Z]/.test(str);
}