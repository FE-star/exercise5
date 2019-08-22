module.exports = function (str) {
  // TODO
  const reg=/^[^0-9][^A-Z]/;
  return reg.test(str);
}