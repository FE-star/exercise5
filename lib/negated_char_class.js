module.exports = function (str) {
  // TODO
  if (typeof str !== 'string') {
    throw new Error('not String')
    return
  }
  return /\D[^A-Z]/.test(str)
  // return /[^0-9][^A-Z]/.test(str)
}