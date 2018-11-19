module.exports = function (str) {
  var res = str.match(/^LITERALLY/)
  return res ? res.input : false
}