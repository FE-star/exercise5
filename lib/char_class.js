module.exports = function (str) {
    const pattern = /^[ac-z0-9]/
    return new RegExp(pattern).test(str)
  // TODO
}