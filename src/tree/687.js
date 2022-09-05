const { array2binary } = require("@xiaowenzi/algorithm.js");

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const HAS_VISITED = 1001; // node.val的范围在-1000~1000，我们用1001标记该节点已经访问过

/**
 * 计算当前相同数值的最大左右深度
 * @param {TreeNode} node 当前节点
 * @param {number} val 当前查找的值
 * @returns {number}
 */
const count = (root, val) => {
  let maxDepth = 0;

  const check = (node) => {
    if (!node || node.val !== val) {
      return 0;
    }
    node.val = HAS_VISITED;
    const leftDepth = check(node.left, val) + 1;
    const rightDepth = check(node.right, val) + 1;

    maxDepth = Math.max(maxDepth, leftDepth + rightDepth - 2);

    return Math.max(leftDepth, rightDepth);
  };
  check(root, val);
  return maxDepth;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {
  let maxDepth = 0;

  const find = (node) => {
    if (node && node.val !== HAS_VISITED) {
      const depth = count(node, node.val);
      maxDepth = Math.max(maxDepth, depth);

      find(node.left);
      find(node.right);
    }
  };
  find(root);

  return maxDepth;
};

const root = array2binary([5, 4, 5, 1, 1, 5]);

console.log(longestUnivaluePath(root));
console.log(longestUnivaluePath(array2binary([1, 4, 5, 4, 4, 5])));
console.log(longestUnivaluePath(array2binary([1, null, 1, 1, 1, 1, 1, 1])));
