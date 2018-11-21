module.exports = function (str) {
  // TODO
  let regexp = /^[^bAQ]/;
  return regexp.test(str);
}