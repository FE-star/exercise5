module.exports = function (str) {
  // TOOD
  var reg = /BANANAS$/
  var match = str.match(reg) || []
  return match[0]
}
