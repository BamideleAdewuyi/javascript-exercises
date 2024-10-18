const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce(((sum, current) => sum + current), 0);
};

const multiply = function(arr) {
  return arr.reduce(((product, current) => product * current), 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  let fact = 1;
	for (i = a; i > 0; i--) {
    fact = reduce(((product, current) => product * i), 1);
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
