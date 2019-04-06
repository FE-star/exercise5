function char_class (str) {
  return /^[^A-Zb]/.test(str);
}
module.exports = char_class;