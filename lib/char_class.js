module.exports = function(str) {
  const reg = /^[auo14]/;
  return reg.test(str);
};
