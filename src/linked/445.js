function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (l1.next || l2.next) {
    const next1 = l1.next || l1;
    const next2 = l2.next || l2;
    addTwoNumbers(next1, next2);
    return;
  }
  console.log(l1, l2);
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
const l1 = arr2linked([7, 2, 4, 3]);
const l2 = arr2linked([5, 6, 4]);
// console.log(l1, l2);
addTwoNumbers(l1, l2);
