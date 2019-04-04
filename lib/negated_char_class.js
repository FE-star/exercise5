module.exports = function (str) {
    // TODO
    let reg = /^\D{1}[^A-Z]{1}.?/
    return reg.test(str)
}