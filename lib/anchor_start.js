module.exports = function (str) {
  // LITERALLY  后面不能有小写字母
  var reg = /LITERALLY\s(?![a-z])/.test(str);
  return reg;
}
