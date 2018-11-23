module.exports = function (str) {
    return str.match(/\b[^A-Z|^b].*\b/);
}
