module.exports = function (str) {
  // TODO
  let res = /^\D[^A-Z]/;
  return res.test(str);
}