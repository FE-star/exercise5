module.exports = function (str) {
  // 必须以 BANANAS 结尾
  var reg = /BANANAS$/.test(str);
  return reg;
}
