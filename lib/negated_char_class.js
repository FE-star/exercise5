module.exports = function (str) {
  // TODO
  var reg = /^[^0-9][^A-Z]/

  return reg.test(str);
}