module.exports = function (str) {
  // TOOD
  var reg_LiterallyStart = /^LITERALLY/;
  return reg_LiterallyStart.test(str);
}