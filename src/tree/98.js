function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * 判断当前节点的值是否在最小值和最大值之间
 * @param {TreeNode} root 当前节点
 * @param {number} min 上一层的最小值
 * @param {number} max 上一层的最大值
 * @returns
 */
var check = (root, min, max) => {
  if (root) {
    if (root.val <= min || root.val >= max) {
      return false;
    }
    return check(root.left, min, root.val) && check(root.right, root.val, max);
  }
  return true;
};

/**
 * @param {TreeNode} root 当前节点
 * @return {boolean}
 */
var isValidBST = function (root) {
  return check(root, -Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};
