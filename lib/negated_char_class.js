module.exports = function (str) {
  // TODO
  var reg = /^[^\d][^A-Z]/
  var match = str.match(reg) || []
  return match[0]
}
