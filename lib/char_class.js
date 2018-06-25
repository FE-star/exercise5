module.exports = function (str) {
  // TODO
  const regex = /^[ac-z\d]/
  return regex.test(str)
}