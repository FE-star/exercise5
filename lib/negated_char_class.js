module.exports = function (str) {
  // TODO
  const regex=/^\D[^A-Z]/;
  return regex.test(str);
}