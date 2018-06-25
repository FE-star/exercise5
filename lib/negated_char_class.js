module.exports = function (str) {
  // TODO
  const regex = /^\D(?![A-Z]{1})/
  return regex.test(str)
}