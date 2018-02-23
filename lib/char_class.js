module.exports = function (str) {
  // TODO
  var reg = /^[ac-z0-9]/;
  return reg.test(str);
}