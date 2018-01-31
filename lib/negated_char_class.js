module.exports = function (str) {
  // TODO
  var reg = /^[^0-9][a-z0-9.]/
  return reg.test(str)
}