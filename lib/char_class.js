module.exports = function (str) {
  // TODO
  var regx=/^(a|\d|u|o)/;
  return regx.test(str);
}
