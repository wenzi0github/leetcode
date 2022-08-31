/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = [];
  const { length } = pushed;

  if (length <= 1) {
    // 只有一个元素时，肯定能实现
    return true;
  }

  let popIndex = 0;
  for (let i = 0; i < length; i++) {
    stack.push(pushed[i]);

    // 当推送一个元素后，跟popped相同时，则把stack里所有相等的元素全都推出来
    while (stack.length && stack[stack.length - 1] === popped[popIndex]) {
      stack.pop();
      popIndex++;
    }
  }

  // 若stack为空，说明从pushed到poped可以转换
  return stack.length === 0;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));
console.log(validateStackSequences([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
