// 题目描述
// 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
// 这道题错了好几次了。详细解析一下：
// 首先l1.l2是原链表
// l是新的结果链表。
// cur是一个指针，对齐操作不会直接影响l
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2) {
  let l1 = pHead1;
  let l2 = pHead2
  let l = new ListNode(-1);
  let cur = l;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      // 相当于l.next=l1 然后l1后移
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    // 这里却不是l的变化，而是cur后移一位
    // 因此需要定义cur，否则l会一直只存储最后一次链接上的内容！！！😐
    cur = cur.next;
  }
  if (l2) {
    cur.next = l2
  } else {
    cur.next = l1
  }
  return l.next
}