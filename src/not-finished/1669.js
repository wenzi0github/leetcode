function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let lastNode = null; // a节点之前的节点
  let nextFirstNode = null; // b节点的下一个节点
  let list2LastNode = null; // list2的最后一个节点

  let node = list1;
  let i = 1;
  while (node) {
    if (i === a) {
      lastNode = a;
    }
    if (i === b) {
      nextFirstNode = b;
      break;
    }
    node = node.next;
    i++;
  }
  node = list2;
  while (node && node.next) {
    node = node.next;
  }
  list2LastNode = node;
  list2LastNode.next = nextFirstNode.next;
  lastNode.next = list2;

  return list1;
};
