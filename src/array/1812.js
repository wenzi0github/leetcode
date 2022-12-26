/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  const aCode = 'a'.charCodeAt(0);
  const [x, y] = coordinates;

  const xCode = x.charCodeAt(0) - aCode; // x坐标从0开始
  const yCode = Number(y); // y坐标从1开始

  // x坐标和y坐标相加为偶数，则为白色
  return ((xCode + yCode) & 1) === 0;
};

console.log( squareIsWhite('a1') );
console.log( squareIsWhite('h3') );
console.log( squareIsWhite('c7') );
