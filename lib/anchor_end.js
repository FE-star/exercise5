module.exports = function (str) {
    const pattern = /(BANANAS)$/
    let regex = new RegExp(pattern)
    return regex.test(str)
  // TOOD
}