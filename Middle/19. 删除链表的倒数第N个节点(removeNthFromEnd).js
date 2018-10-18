/**
 * 未完成！
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 function ListNode(val) {
       this.val = val;
       this.next = null;
 }
function getl(head)
{
    var len = 0;
    var cur = head;
    while(cur!=null)
        {
            cur = cur.next;
            len++;
        }
    return len;
}
var removeNthFromEnd = function(head, n) {
    var l = getl(head);
    console.log(l);
    //if(n>l){return false}
    var cur = new ListNode();
    var cur1 = new ListNode();

    cur.next = head;
    cur1.next = head;
    console.log(l,cur,cur1,head);
    while(n>0&&cur)
    {
      cur = cur.next;
      n--;
      console.log(cur,n);
    }
    if(n>0){return head}

    return cur.next;
};
console.log(removeNthFromEnd([1,2,3,4,5],2));
