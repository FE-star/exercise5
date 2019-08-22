module.exports = function (str) {
  // TODO
  // b不行  数字可以 大写不行
  var reg=/^[auo14]/;
  return reg.test(str);
}