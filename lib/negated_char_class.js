module.exports = function (str) {
  // TODO
  const regExp = /^\D[^A-Z]/;
  return regExp.test(str);
}