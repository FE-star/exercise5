module.exports = function (str) {
  // TODO
	// 匹配开头非数字，第二个字符非大写字母
	return /^[^\d]((?<=\S)[^A-Z])/.test(str)
}