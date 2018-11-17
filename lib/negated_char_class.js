module.exports = function (str) {
  const reg = /^\D[^A-D]/
  return reg.test(str)
}