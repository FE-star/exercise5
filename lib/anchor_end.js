module.exports = function (str) {
    var regExpEnd = /.*BANANAS$/;
    return regExpEnd.test(str);
}