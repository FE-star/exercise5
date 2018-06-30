module.exports = function (str) {
  let reg = /[^abegAQ1]+/
  return reg.test(str)
}