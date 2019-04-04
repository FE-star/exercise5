module.exports = function (str) {
  // TOOD
  const partten=/BANANAS$/;
  let match=str.match(partten);
  if(match!==null){
    return true;
  }
}