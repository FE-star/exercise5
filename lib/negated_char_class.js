module.exports = function (str) {
  if (/^\D[^A-Z]\w*/.test(str)) {
    return true
  } else {
    return false
  }
}
