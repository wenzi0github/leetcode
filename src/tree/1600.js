class TreeNode {
  /**
   * 初始化
   * @param {string} name 姓名
   */
  constructor(name) {
    this.name = name;
    this.live = true;
    this.children = [];
  }
}

/**
 * @param {string} kingName
 */
var ThroneInheritance = function (kingName) {
  this.root = new TreeNode(kingName);
};

/**
 * @param {string} parentName
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function (parentName, childName) {
  let queue = [this.root];

  while (queue.length && queue[0].name !== parentName) {
    const firstNode = queue.shift();

    queue = queue.concat(firstNode.children);
  }
  queue[0].children.push(new TreeNode(childName));
};

/**
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function (name) {
  let queue = [this.root];

  while (queue.length && queue[0].name !== name) {
    const firstNode = queue.shift();

    queue = queue.concat(firstNode.children);
  }
  queue[0].live = false;
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function () {
  const orders = [];

  const find = (node) => {
    if (node.live) {
      orders.push(node.name);
    }

    if (Array.isArray(node.children) && node.children.length) {
      node.children.forEach(find);
    }
  };
  find(this.root);

  return orders;
};

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */

const obj = new ThroneInheritance('king');
obj.birth('king', 'Alice');
obj.birth('king', 'Bob');
obj.birth('Alice', 'Jack');

console.log(obj.getInheritanceOrder());
