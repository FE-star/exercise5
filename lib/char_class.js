module.exports = function (str) {
  // TODO
  var reg = /^[a|\d||u|o]/
  return reg.test(str);
}