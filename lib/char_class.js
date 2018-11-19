module.exports = function (str) {
  var res = str.match(/^[a1u4o]|^[^bAQ]/)
  return res ? res.input : false
}