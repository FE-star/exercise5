module.exports = function (str) {
  // TODO
  let regexp = /^[\d|(ac-z)]/;
  return regexp.test(str);
}