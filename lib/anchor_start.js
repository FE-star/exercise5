module.exports = function (str) {
  if (/^LITERALLY/.test(str)) {
    return true;
  } else {
    return false;
  }
}
