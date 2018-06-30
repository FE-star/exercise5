module.exports = function (str) {
  // TOOD
  var reg_bananas_end = /BANANAS$/;
  return reg_bananas_end.test(str);
}