module.exports = function (str) {
    var regExpNeg = /^[^0-9][^A-Z].*/;
    return regExpNeg.test(str);
}