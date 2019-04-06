function negated_char_class (str) {
  return /\D[^A-Z]/.test(str);
}

module.exports = negated_char_class;