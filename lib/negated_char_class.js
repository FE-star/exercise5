module.exports = function (str) {
  let reg = /[^\d][^A-Z]/
  return reg.test(str)
}
