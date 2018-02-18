module.exports = function (str) {
    return new RegExp(/^[^0-9][^A-Z]/).test(str)
  // TODO
}