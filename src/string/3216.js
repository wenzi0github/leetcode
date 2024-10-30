/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function(s) {
  const arr = s.split('');

  for (let i = 0; i < arr.length - 1; i++) {
    if (((Number(arr[i]) % 2) === (Number(arr[i + 1]) % 2)) && arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      break;
    }
  }

  return arr.join('');
};

console.log(getSmallestString('45320'));
console.log(getSmallestString('001'));
