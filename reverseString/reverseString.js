const reverseString = function(string) {
  let result = string.split("");
  let reverse = result.reverse();
  let reverseText = reverse.join("");
  return reverseText;
}

module.exports = reverseString


