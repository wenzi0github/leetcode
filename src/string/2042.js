/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  let prevNum = -1;
  const arr = s.split(' ');
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (item && item[0] >= '0' && item[0] <= '9') {
      const num = Number(item);
      // console.log(prevNum, num);
      if (prevNum >= num) {
        return false;
      }
      prevNum = num;
    }
  }
  return true;
};

console.log(areNumbersAscending('1 box has 3 blue 4 red 6 green and 12 yellow marbles'));
console.log(areNumbersAscending('hello world 5 x 5'));
console.log(areNumbersAscending('4 5 11 26'));
