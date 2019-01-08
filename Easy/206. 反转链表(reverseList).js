/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 // 72 ms, 在Reverse Linked List的JavaScript提交中击败了99.88% 的用户
var reverseList = function(head) {
    var re = null;//空链表存结果
    var curnode = head;//原链表
    /*
    先保存当前的后继链表
    cur.next=re；
    re = cur;
    re=cur->re
    */
    while(curnode!==null)
        {
            let next = curnode.next;
            curnode.next = re;
            re = curnode;
            curnode = next;
        }
    return re
};
