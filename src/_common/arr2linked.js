function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

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
console.log(arr2linked([7, 2, 4, 3]));
