/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];
  const arr = path.split('/');

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item) {
      // console.log('item', item);
      switch (item) {
        case '..': {
          stack.pop();
          break;
        }
        case '.': {
          // stack.pop();
          // 当前目录，啥也不用干
          break;
        }
        default: {
          stack.push(item);
        }
      }
    }
  }
  return `/${stack.join('/')}`;
};

console.log(simplifyPath('/home/'));
console.log(simplifyPath('/../'));
console.log(simplifyPath('/home//foo/')); 
console.log(simplifyPath('/a/./b/../../c/')); 
