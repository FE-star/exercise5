module.exports = function (str) {
    var regex1 =  /^[ac-z\d]/;
    return  regex1.test(str);
}
