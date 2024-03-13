/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function (root) {
  const set = new Set();

  const create = (node) => {
    if (node) {
      if (node.left) {
        const val = node.val * 2 + 1;
        node.left.val = val;
        set.add(val);
        create(node.left);
      }
      if (node.right) {
        const val = node.val * 2 + 2;
        node.right.val = val;
        set.add(val);
        create(node.right);
      }
    }
  };
  set.add(0);
  root.val = 0;
  create(root);
  this.set = set;
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
  return this.set.has(target);
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
