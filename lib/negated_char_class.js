module.exports = function (str) {
  const reg = /^\D[^A-Z]\w*/;
  return reg.test(str);
}