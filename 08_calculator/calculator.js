const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(list) {
  return list.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(list) {
  return list.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(n, p) {
  return Math.pow(n, p);
};

const factorial = function(n) {
  if (n === 0) return 1;

  return factorial(n - 1) * n;
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
