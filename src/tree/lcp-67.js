function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var expandBinaryTree = function (root) {
  if (root) {
    if (root.left) {
      const node = new TreeNode(-1);
      const left = root.left;
      root.left = node;
      node.left = expandBinaryTree(left);
    }
    if (root.right) {
      const node = new TreeNode(-1);
      const right = root.right;
      root.right = node;
      node.right = expandBinaryTree(right);
    }
  }

  return root;
};
