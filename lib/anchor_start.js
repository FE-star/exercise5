module.exports = function (str) {
    var regExpStart = /^LITERALLY.*/;
    return regExpStart.test(str);
}