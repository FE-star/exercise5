module.exports = function(str) {
  const reg = /^\D[^A-Z]/;
  return reg.test(str);
};
