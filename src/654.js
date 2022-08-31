/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 *
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @returns
 */
const create = (nums, left, right) => {
  if (left >= right) {
    return null;
  }
  let maxIndex = left;
  let maxValue = nums[left];
  for (let i = left + 1; i < right; i++) {
    if (nums[i] > maxValue) {
      maxValue = nums[i];
      maxIndex = i;
    }
  }
  const node = new TreeNode(maxValue);
  node.left = create(nums, left, maxIndex);
  node.right = create(nums, maxIndex + 1, right);
  return node;
};

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  const { length } = nums;

  return create(nums, 0, length);
};

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));
console.log(constructMaximumBinaryTree([3, 2, 1]));
