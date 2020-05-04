const palindromes = function(a) {
  a = a.toLowerCase();
  a = a.replace(/[^a-z]/gi, '');
  let array = a.split("");
  let len = array.length;

  if (len % 2 == 0) {
    for (i=0; i<(len / 2); i++) {
      if (array[i] == array[len-i-1]) return true;
      return false;
    }
  } else {
    for (i=0; i<((len-1) / 2); i++) {
      if (array[i] == array[len-i-1]) {
        return true;
      } else {
        return false;
      }
    }
  }
}
 
module.exports = palindromes
