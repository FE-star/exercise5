module.exports = function (str) {
  // TODO
  var reg_first_letter = /^[ac-z0-9]/;
  return reg_first_letter.test(str);
}