module.exports = function (str) {
	const reg = /^[^0-9][^A-Z].*?$/
	return reg.test(str)
  // TODO
}