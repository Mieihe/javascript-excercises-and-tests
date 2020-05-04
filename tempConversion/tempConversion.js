const ftoc = function(fahr) {
  let finalCelc = (fahr - 32) * (5/9);
  let roundedFinalCelc = Math.round(finalCelc*10) / 10;
  return roundedFinalCelc;
}

const ctof = function(celc) {
  let finalFahr = celc * (9/5) + 32;
  let roundedFinalFahr = Math.round(finalFahr*10) / 10;
  return roundedFinalFahr;
}

module.exports = {
  ftoc,
  ctof
}
