module.exports = function (str) {
  let arr =/.*BANANAS$/.exec(str);
  return arr ? arr[0] : '';
}