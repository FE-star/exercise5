module.exports = function (str) {
  var res = str.match(/^[^\d](?:[^A-Z])/)
  return res ? res.input : false
}