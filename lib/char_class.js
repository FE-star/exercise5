module.exports = function (str) {
  // TODO
  
  var reg = /^(a|[c-z]|[0-9])/g;
  return reg.test(str)
}