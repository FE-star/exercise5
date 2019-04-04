module.exports = function (str) {
  // TODO
  const partten=/([^0-9]{1})([^A-Z])/;
  let match=str.match(partten);
  if(match!==null){
    return true;
  }
}