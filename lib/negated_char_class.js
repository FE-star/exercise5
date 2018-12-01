module.exports = function (str) {
  // TODO
  var regx=/^\D[^A-Z]/;
  return regx.test(str);
}
