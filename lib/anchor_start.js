module.exports = function (str) {
    const pattern = /^(LITERALLY)/
    let regex = new RegExp(pattern)
    return regex.exec(str)
  // TOOD
}