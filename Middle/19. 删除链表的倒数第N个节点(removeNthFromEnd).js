/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 function ListNode(val) {
       this.val = val;
       this.next = null;
 }
 /**
  * Definition for singly-linked list.
  * function ListNode(val) {
  *     this.val = val;
  *     this.next = null;
  * }
  */
 /**
  * @param {ListNode} head
  * @param {number} n
  * @return {ListNode}
  */
 //first method twice loop
 var removeNthFromEnd = function(head, n) {
     //build one Listnode which headnode = 0;
     //dummy ListNode { val: 0, next: null }
     var dummy = new ListNode(0);
     //console.log(dummy);
     dummy.next = head;
     var l = 0;
     //first ListNode { val: undefined, next: null }
     var first = new ListNode();
     //console.log(first);
     //first 1->2->3->4->5
     first = head;
     //console.log(first)
     //get head length
     while(first!=null)
     {
         l++;
         first = first.next;
     }
     l =l-n;
     //first = dummy 0->1->2->3->4->5
     first = dummy;
     //console.log(first,dummy)
     while(l>0)
         {
             l--;
             first = first.next;

         }

     first.next = first.next.next;
     //dummy next 链接到first
     console.log(first,dummy)
     return dummy.next;
 };
console.log(removeNthFromEnd([1,2,3,4,5],2));
