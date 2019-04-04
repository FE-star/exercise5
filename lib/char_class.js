module.exports = function (str) {
  // TODO
  const partten=/^[a14uo]/;
  let match=str.match(partten);
  if(match!==null){
    return true;
  }
}