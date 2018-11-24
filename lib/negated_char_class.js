module.exports = function (str) {
  // TODO
  var regex = /^[^0-9][^A-Z]/;
    return regex.test(str);
}
