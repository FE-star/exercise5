module.exports = function (str) {
  // TODO
  if (typeof str !== 'string') {
    throw new Error('not String')
    return
  }
  return /^[ac-z0-9]/.test(str)
}