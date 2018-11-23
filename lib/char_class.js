module.exports = function (str) {
  // TODO
  const reg = /^[a1u4o].*/;
  
  return reg.test(str) ? str : '';
}