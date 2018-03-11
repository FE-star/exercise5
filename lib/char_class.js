module.exports = function (str) {
  var reg = /^(az|(abc)?123|under|404x|obelisk)/.test(str);
  return reg;
}
