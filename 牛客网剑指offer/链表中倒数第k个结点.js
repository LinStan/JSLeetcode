// 题目描述
// 输入一个链表， 输出该链表中倒数第k个结点。 
// 题目不明确，明明最后返回的head.val，但是返回head才判对
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k) {
  // write code here
  let l = 0;
  let head1 = head
  while (head1) {
    l++
    head1 = head1.next
  }
  let i = 0;
  if (l < k) {
    return null
  }
  //console.log(head,head1)
  while (i < (l - k)) {
    i++;
    head = head.next;
  }
  //console.log(head,head1)
  //let ret = head.val;
  return head
}