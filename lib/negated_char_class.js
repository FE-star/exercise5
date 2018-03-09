module.exports = function (str) {
  // TODO
  
  var reg = /^\D[^A-Z]/g;
  return reg.test(str)
}