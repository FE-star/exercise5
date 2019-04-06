function anchor_start (str) {
  return /^LITERALLY/.test(str);
}
module.exports = anchor_start;