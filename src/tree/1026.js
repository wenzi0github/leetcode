const { array2binary } = require('@xiaowenzi/algorithm.js');

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number[]} parents
 * @return {number}
 */
var maxAncestorDiff = function (root, parents = []) {
  let maxDiff = 0;
  if (root) {
    let curDiff = 0;
    parents.forEach((item) => {
      curDiff = Math.max(curDiff, Math.abs(item - root.val));
    });
    const leftDiff = maxAncestorDiff(root.left, parents.concat(root.val));
    const rightDiff = maxAncestorDiff(root.right, parents.concat(root.val));

    maxDiff = Math.max(curDiff, leftDiff, rightDiff);
  }

  return maxDiff;
};

// const array2binary = (arr) => {
//   if (!arr || !arr.length) {
//     return null;
//   }
//   let index = 0;
//   const queue = [];
//   const len = arr.length;
//   const head = new TreeNode(arr[index]);
//   queue.push(head);

//   while (index < len) {
//     index++;
//     const parent = queue.shift();
//     if (arr[index] !== null && arr[index] !== undefined) {
//       const node = new TreeNode(arr[index]);
//       parent.left = node;
//       queue.push(node);
//     }

//     index++;
//     if (arr[index] !== null && arr[index] !== undefined) {
//       const node = new TreeNode(arr[index]);
//       parent.right = node;
//       queue.push(node);
//     }
//   }
//   return head;
// };
const root = array2binary([8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13]);
console.log(maxAncestorDiff(root));
