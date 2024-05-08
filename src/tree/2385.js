function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
  const map = new Map();

  const find = (node, parent = null) => {
    if (node) {
      map.set(node.val, {
        parent: parent?.val || -1,
        left: node.left?.val || -1,
        right: node.right?.val || -1,
      });
      find(node.left, node);
      find(node.right, node);
    }
    return null;
  };

  find(root);

  const queue = [[start]];
  const used = new Set();
  let minutes = 0;

  used.add(start);
  while (queue.length) {
    const nodes = queue.shift();
    const list = [];

    nodes.forEach((val) => {
      const { parent, left, right } = map.get(val);

      if (parent > 0 && !used.has(parent)) {
        used.add(parent);
        list.push(parent);
      }
      if (left > 0 && !used.has(left)) {
        used.add(left);
        list.push(left);
      }
      if (right > 0 && !used.has(right)) {
        used.add(right);
        list.push(right);
      }
    });
    // console.log(nodes, list);
    if (list.length) {
      queue.push(list);
      minutes++;
    }
  }
  return minutes;
};

const array2binary = (arr) => {
  if (!arr || !arr.length) {
    return null;
  }
  let index = 0;
  const queue = [];
  const len = arr.length;
  const head = new TreeNode(arr[index]);
  queue.push(head);

  while (index < len) {
    index++;
    const parent = queue.shift();
    if (arr[index] !== null && arr[index] !== undefined) {
      const node = new TreeNode(arr[index]);
      parent.left = node;
      queue.push(node);
    }

    index++;
    if (arr[index] !== null && arr[index] !== undefined) {
      const node = new TreeNode(arr[index]);
      parent.right = node;
      queue.push(node);
    }
  }
  return head;
};

const root = array2binary([2, 5]);
console.log(amountOfTime(root, 5));
