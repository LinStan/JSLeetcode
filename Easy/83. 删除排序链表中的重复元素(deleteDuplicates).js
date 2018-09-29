/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 function ListNode(val){
   this.val = val;
   this.next = null;
 }

//本地编译有误。上传是对的
var deleteDuplicates = function(head) {
    if(head === null || head.next === null){
        return head;
    }

    var cur = head;

    while(cur.next){
        if(cur.val === cur.next.val){
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};

console.log(deleteDuplicates([1,1,2,2,2,2,3]));
