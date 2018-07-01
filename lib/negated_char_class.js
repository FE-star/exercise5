module.exports = function (str) {
  let arr =/^[^0-9][^A-Z].*/.exec(str);
  return arr ? arr[0] : '';
}