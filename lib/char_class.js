module.exports = function (str) {
  // TODO
  const reg = /^[^bA-Z]/;
  return reg.test(str);
}
