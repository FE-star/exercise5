module.exports = function (str) {
  const partten=/^LITERALLY/;
  let match=str.match(partten);
  if(match!==null){
    return true;
  }
}