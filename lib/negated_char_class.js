module.exports = function (str) {
  // TODO
  const regExp = /^[^0-9][^A-Z]/;
  return regExp.test(str);
}