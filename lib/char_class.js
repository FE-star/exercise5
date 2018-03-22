module.exports = function (str) {
  // TODO
  const regExp = /^[ac-z0-9]/;
  return regExp.test(str);
}