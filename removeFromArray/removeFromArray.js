const removeFromArray = function(arr, ...arg) {
  
  for (let i=0; i<arg.length; i++) {
    let index = arr.indexOf(arg[i]);
    if (index > -1) {
      arr.splice(index,1)
    }
  }
  return arr;
}

module.exports = removeFromArray


