module.exports = function (str) {
  // TODO
  // return /^[^0-9][^A-Z]/.test(str)
  return /^\D[^A-Z]/.test(str)
}