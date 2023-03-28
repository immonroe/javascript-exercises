const ftoc = function(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  let round = Math.round(fToCel * 10) / 10
  return round
};

const ctof = function(celsius) {
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  let round = Math.round(cToFahr * 10) / 10
  return round
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
