module.exports = function (str) {
  if (/^[bAQ]/.test(str)) {
    return false;
  } else {
    return true;
  }
}
