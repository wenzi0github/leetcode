/**
 * @param {string} s
 * @param {number} a
 * @return {string}
 */
const add = (s, a) => {
  const { length } = s;
  let str = '';

  for (let i = 0; i < length; i++) {
    if ((i & 1) === 1) {
      str += (s[i] - '0' + a) % 10;
    } else {
      str += s[i];
    }
  }
  return str;
};

/**
 * @param {string} s
 * @param {number} b
 * @return {string}
 */
const rotate = (s, b) => {
  const { length } = s;
  let str = '';

  b = b % length;
  for (let i = length - b; i < length; i++) {
    str += s[i];
  }
  for (let i = 0; i < length - b; i++) {
    str += s[i];
  }
  return str;
};

/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function (s, a, b) {
  let minStr = s;
  const queue = [s];
  const set = new Set();

  while (queue.length) {
    // console.log('queue', queue);
    const node = queue.shift();

    const str1 = add(node, a);
    minStr = str1 < minStr ? str1 : minStr;
    if (!set.has(str1)) {
      set.add(str1);
      queue.push(str1);
    }

    const str2 = rotate(node, b);
    // minStr = Math.min(str2, minStr);
    minStr = str2 < minStr ? str2 : minStr;

    if (!set.has(str2)) {
      set.add(str2);
      queue.push(str2);
    }
  }

  return minStr;
};

// console.log(findLexSmallestString('5525', 9, 2));
// console.log(findLexSmallestString('74', 5, 1));
console.log(findLexSmallestString('43987654', 7, 3));
