module.exports = function (str) {
  // TODO
  const reg = /^[^\d][^A-Z].*/;

  return reg.test(str) ? str : '';
}