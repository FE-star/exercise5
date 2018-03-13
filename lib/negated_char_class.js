module.exports = function (str) {
  // TODO
  return new RegExp(/^\D[^A-Z]/).test(str)
}