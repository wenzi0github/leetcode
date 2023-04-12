/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function (s) {
  const atIndex = s.indexOf('@');
  if (atIndex >= 0) {
    // 这是邮箱地址
    s = s.toLowerCase();
    return `${s[0]}*****${s[atIndex - 1]}${s.slice(atIndex)}`;
  }
  const ten = 10;
  s = s.replace(/\D/g, ''); // 去掉非数字的字符
  let str = `***-***-${s.slice(-4)}`;
  if (s.length === ten) {
    return str;
  }
  let starStr = '';
  let i = s.length - 10;
  while (i--) {
    starStr += '*';
  }
  return `+${starStr}-${str}`;
};

console.log(maskPII('LeetCode@LeetCode.com'));
console.log(maskPII('AB@qq.com'));
console.log(maskPII('1(234)567-890'));
console.log(maskPII('86-(10)12345678'));
