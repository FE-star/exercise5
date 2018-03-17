module.exports = function (str) {
  // TODO
  if(/^(?!\d).(?![A-Z]).+$/.test(str))
  {
       return str;  
  }else
  {
       return "";
  }
}
