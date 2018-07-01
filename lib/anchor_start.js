module.exports = function (str) {
  let arr =/^LITERALLY.*/.exec(str);
  return arr ? arr[0] : '';
}