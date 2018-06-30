module.exports = function (str) {
  let reg = /^[^0-9][^A-Z].*/
  return reg.test(str)
}