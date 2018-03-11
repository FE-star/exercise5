module.exports = function (str) {
  var reg = /^[\D][^A-Z]{1}/.test(str);
  return reg;
}
