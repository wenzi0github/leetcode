/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function(coordinate1, coordinate2) {
  const a = 'a'.charCodeAt(0);
  const x1 = coordinate1[0].charCodeAt(0) - a;
  const y1 = Number(coordinate1[1]);
  const x2 = coordinate2[0].charCodeAt(0) - a;
  const y2 = Number(coordinate2[1]);

  return (x1+y1)%2 === (x2+y2)%2;
};

console.log(checkTwoChessboards('a1', 'c3'));
console.log(checkTwoChessboards('a1', 'h3'));
