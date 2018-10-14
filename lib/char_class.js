module.exports = function (str) {
  // TODO
  var regex = /^[a1u4o]/
  return regex.test(str) ? str : null
}