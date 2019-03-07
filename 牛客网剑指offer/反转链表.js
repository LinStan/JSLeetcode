// 输入一个链表， 反转链表后， 输出新链表的表头。
function ListNode(x) {
  this.val = x;
  this.next = null;
}

function ReverseList(pHead) {
  // 这里不能定为一个新链表。会导致翻转后的链表最后有个多的结点
  let ret = null;
  while (pHead) {
    // 先保存后继链表
    let next = pHead.next;
    // 然后将当前链表的后继指向ret
    pHead.next = ret;
    // 再更新ret，相当于获取了一个节点
    ret = pHead;
    // 最后更新当前链表为他的后继
    pHead = next;
  }
  return ret;
}