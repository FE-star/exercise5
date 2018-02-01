module.exports = function (str) {
  // TOOD
  var reg = /^LITERALLY/
  var match = str.match(reg) || []
  return match[0]
}
