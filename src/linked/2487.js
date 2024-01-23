function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
  let p = head.next;
  let q = head;

  // 先找新的起点
  while (p && p.val <= head.val) {
    p = p.next;
  }
  if (!p || !p.next) {
    // 达到了结尾也没找到更大的节点，说明
    return head;
  }
  head = p.next; // 新的起点

  return head;
};

const arr2linked = (arr) => {
  if (!arr.length) {
    return null;
  }
  const head = new ListNode(arr[0]);
  let p = head;
  let i = 1;

  while (i < arr.length) {
    const q = new ListNode(arr[i]);
    p.next = q;
    p = p.next;
    i++;
  }

  return head;
};
const root = arr2linked([1, 0, 2, 3]);
console.log(removeNodes(root));
