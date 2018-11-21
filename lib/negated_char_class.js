module.exports = function (str) {
  // TODO
  let reg = /^[^\d][^A-Z]/
  let res = reg.test(str)
  return res;
}