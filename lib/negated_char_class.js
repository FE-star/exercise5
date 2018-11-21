module.exports = function (str) {
  // TODO
  const reg = /^\D[^A-D]/
  return reg.test(str)
}