module.exports = function (str) {
  // TOOD
  if(typeof str !== 'string'){
       throw new Error('not String')
       return
  }
  return /^LITERALLY/.test(str)
}