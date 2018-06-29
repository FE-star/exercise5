module.exports = function (str) {
    var regExpChar = /^[a1u4o].*/;
    return regExpChar.test(str);
}