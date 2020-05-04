const sumAll = function(begin, end) {
  let finalSum = 0
  if (typeof(begin) !== 'number' || typeof(end) !== 'number' || begin < 0 || end < 0) {
    return 'ERROR';
  } else {
    if (begin <= end) {
      for (i=begin; i<=end; i++) {
        finalSum += i;
      }
      return finalSum;
    } else {
      for (i=end; i<=begin; i++) {
        finalSum += i;
      }
      return finalSum;
    }
  }
}

module.exports = sumAll
