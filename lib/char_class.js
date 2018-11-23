module.exports = function (str) {
	// ?! 反响查找，即不匹配
	// \1 和 $1的意思是一致的， \1 在验证的时候使用，$1在替换的时候使用
	const reg = /^[0-9]*?(?:([a-z])(?!\1))*?[0-9]*?$/
	return reg.test(str)
  // TODO
}