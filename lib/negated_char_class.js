module.exports = function (str) {
  // TODO
  var regex = /^\D[^A-Z]/
  return regex.test(str) ? str : null
}