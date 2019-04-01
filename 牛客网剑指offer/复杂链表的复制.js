/*
    1、复制每个节点，如：复制节点A得到A1，将A1插入节点A后面
    2、遍历链表，A1->random = A->random->next;
    3、将链表拆分成原链表和复制后的链表
*/
/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
function Clone(pHead) {
  // write code here
  while (!pHead) {
    return null;
  }
  let curNode = pHead;
  //复制链表的label和next
  while (curNode != null) {
    let cloneNode = new RandomListNode(curNode.label)
    let nextNode = curNode.next;
    curNode.next = cloneNode;
    cloneNode.next = nextNode;
    curNode = nextNode;
  }
  curNode = pHead;
  //复制链表的random
  while (curNode != null) {
    curNode.next.random = curNode.random == null ? null : curNode.random.next;
    curNode = curNode.next.next;
  }
  curNode = pHead;
  //拆分链表
  let retHead = pHead.next;
  while (curNode) {
    cloneNode = curNode.next;
    curNode.next = cloneNode.next;
    cloneNode.next = (cloneNode.next == null) ? null : cloneNode.next.next;
    // 上面这句等价于
    // if(cloneNode.next==null)
    // {
    //   cloneNode.next=null
    // }
    // else
    // {
    //   cloneNode.next=cloneNode.next.next;
    // }
    curNode = curNode.next
  }
  return retHead
}