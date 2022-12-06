/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  const str = '0123456789abcdef';
  let result = '';

  if (num === 0) {
    return '0';
  }
  // 0xf即 01111b，所有数跟它按位与操作，都是得到二进制的最后4位；
  // 然后将num右移，正数左侧自动补0，负数左侧自动补1；
  while (num) {
    result = str[num & 0xf] + result;
    num >>>= 4;
  };
  // console.log(result);
  return result;
};

console.log(toHex(26));
console.log(toHex(-1));
console.log(toHex(10));
