/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  const arrLen = 10;
  const arr = new Array(arrLen).fill(0);
  const colors = { R: 1, G: 2, B: 4 };

  let count = 0;

  for (let i = 0; i < rings.length; i = i + 2) {
    const color = rings[i];
    const index = rings[i + 1];

    arr[index] |= colors[color];
  }
  for (let i = 0; i < arrLen; i++) {
    if (arr[i] === 7) {
      count++;
    }
  }
  return count;
};

console.log(countPoints('B0R0G0R9R0B0G0'));
