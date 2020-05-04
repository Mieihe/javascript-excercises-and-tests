const caesar = function(str, shift) {
  let arrToDecipher = str.split("");
  let newArray= [];
  const aAzZCharsString = "A a B b C c D d E e F f G g H h I i J j K k L l M m N n O o P p Q q R r S s T t U u V v W w X x Y y Z z";
  let aAzZCharsArray = aAzZCharsString.split(" ");

  arrToDecipher.forEach(element => {
    if (aAzZCharsArray.includes(element)) {
      let arrayIndex = aAzZCharsArray.findIndex(chara => chara === element);
      let indexToFetch = arrayIndex+(shift*2);
      if (indexToFetch >= aAzZCharsArray.length) { 
        while (indexToFetch >= aAzZCharsArray.length) {
        indexToFetch -= aAzZCharsArray.length; }
      } else if (indexToFetch <= 0) { 
        while (indexToFetch <= 0) {
        indexToFetch += aAzZCharsArray.length; } 
      };
      element = aAzZCharsArray[indexToFetch];
      newArray.push(element);
    } else {
      newArray.push(element);
    }
  });
  return newArray.join("");
  
}

module.exports = caesar
