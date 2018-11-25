module.exports = function (str) {
    // TODO
    const patt = /^[^0-9][^A-Z]*$/
    return patt.exec(str);
}