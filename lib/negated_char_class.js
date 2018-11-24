module.exports = function (str) {
    var regex1 = /^\D(?![A-Z])/
    return regex1.test(str);
}
