function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head) {
    return head;
  }

  const arr = [];
  let p = head;

  while (p) {
    const node = p;
    p = p.next;

    node.next = null;
    arr.push(node);
  }
  arr.sort((node1, node2) => {
    return node1.val <= node2.val ? -1 : 1;
  });
  // console.log(arr);
  const newHead = arr[0];
  let q = newHead;
  const { length } = arr;
  let i = 1;
  while (i < length) {
    q.next = arr[i];
    q = q.next;
    i++;
  }
  return newHead;
};

const head = new ListNode(4);
const p1 = new ListNode(2);
const p2 = new ListNode(1);
const p3 = new ListNode(3);

head.next = p1;
p1.next = p2;
p2.next = p3;

console.log(sortList(head));
