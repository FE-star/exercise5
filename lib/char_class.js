module.exports = function (str) {
  let arr =/^[aeoui0-9].*/.exec(str);
  return arr ? arr[0] : '';
}