module.exports = function (str) {
  // TODO
  var reg = /[^babbage|^AAA|^Q1][a-z0-9]{0}?/
  return reg.test(str)
}