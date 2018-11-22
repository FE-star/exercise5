module.exports = function(str) {
  // TODO
  return new RegExp(`^[^0-9][^A-Z]`).test(str);
};
// 匹配开头非数字，第二个字符非大写字母
