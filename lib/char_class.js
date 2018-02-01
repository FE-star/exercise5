module.exports = function (str) {
  // TODO
  var reg = /^[ac-z\d]/
  var match = str.match(reg) || []
  return match[0]
}
