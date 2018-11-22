module.exports = function (str) {
  // TODO
  let regexp = /^\D[^A-Z]/;
  return regexp.test(str);
}