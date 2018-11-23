module.exports = function (str) {
  const reg = /^(LITERALLY)[.\n]*/
  return reg.test(str)
}