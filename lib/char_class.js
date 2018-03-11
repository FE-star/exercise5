module.exports = function (str) {
  const reg = /^[auo14]\w*/;
  return reg.test(str);
}