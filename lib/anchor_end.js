module.exports = function (str) {
  // TOOD
  if(/^(BANANAS|.+BANANAS)$/.test(str))
  {
    return str;
  }else
  {
    return "";
  }
}
