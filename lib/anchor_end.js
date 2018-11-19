module.exports = function (str) {
  var res=str.match(/BANANAS$/)
  return res?res.input:false
}