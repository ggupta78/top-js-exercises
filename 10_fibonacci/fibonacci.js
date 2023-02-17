const fibonacci = function(n) {
  const terms = [1, 1];

  if (n.isNan) {
    n = Number.parseInt(n);
    if (n.isNan) return "OOPS";
  }

  if (n < 0) return "OOPS";

  if (n < 3) return 1;

  for (let index = 3; index <= n; index++) {
    terms.push(terms[index - 3] + terms[index - 2]);
  }

  return terms[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
