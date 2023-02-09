const sumAll = function() {
  let start = arguments[0];
  let end = arguments[1];

  if (start < 0 || end < 0) {
    return 'ERROR';
  }

  if (typeof start != 'number' || typeof end != 'number') {
    return 'ERROR';
  }

  if (start > end) {
    start = end;
    end = arguments[0];
  }

  let count = end - start + 1;

  return count * ((start + end) / 2);
};

// Do not edit below this line
module.exports = sumAll;
