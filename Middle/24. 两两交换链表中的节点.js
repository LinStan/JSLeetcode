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
//  执行用时: 104 ms, 在Swap Nodes in Pairs的JavaScript提交中击败了20.67% 的用户
// 内存消耗: 14.8 MB, 在Swap Nodes in Pairs的JavaScript提交中击败了0.00% 的用户
var swapPairs = function(head) {
    if(head==null){return head};
    //定义个新链表 后继为head
    let head0 = new ListNode(-1);
    head0.next=head;
    //定义当前节点 ?-1-2-3-4
    let cur = head0;
    //当两步后不为空 两个条件。不然类似[1]会报错 null无后继
    while(cur.next&&cur.next.next)
        {
            //定义cur的后继 1-2-3-4
            let temp = cur.next;
            //console.log(temp)
            //定位到两步后的后继 -1-2-3-4
            cur.next = cur.next.next;
            //console.log(cur)
            temp.next = temp.next.next;
            //console.log(temp)
            cur.next.next = temp;
            //console.log(cur)
            cur = temp
           // console.log(temp,cur)
        }
    return head0.next
};
