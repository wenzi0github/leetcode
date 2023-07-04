/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    const { length } = functions;

    if (length === 0) {
      return x;
    }
    let i = length - 1;
    while (i >= 0) {
      x = functions[i](x);
      i--;
    }
    return x;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
