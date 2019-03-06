/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head) {
  // write code here
  let ret = [];
  while (head) {
    ret.unshift(head.val);
    head = head.next;
  }
  return ret
}
console.log(printListFromTailToHead([1, 2, 3, 4, 5]))