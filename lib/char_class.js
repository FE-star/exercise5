module.exports = function (str) {
  // TODO
  return !(/(([a-zA-Z])\2|[A-Z])+/.test(str));
}