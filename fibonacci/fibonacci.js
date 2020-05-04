const fibonacci = function(num) {
  let newNum = Number(num);
  let currentFibo = 1;
  let earlierFibo = 0;
  if (newNum < 0) return "OOPS";
  for (i=0; i<(newNum-1); i++) {
    let tempFibo = currentFibo + earlierFibo;
    earlierFibo = currentFibo;
    currentFibo = tempFibo;
  }
  return currentFibo;
}

module.exports = fibonacci
