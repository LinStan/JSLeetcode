// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Hide Company Tags Amazon LinkedIn Apple Microsoft
// Hide Tags Linked List
// Hide Similar Problems (H) Merge k Sorted Lists (E) Merge Sorted Array (M) Sort List (M) Shortest Word Distance II

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val){
  this.val = val;
  this.next = null;
}
var mergeTwoLists = function(l1, l2) {
  var current1 =l1;
  var current2 =l2;
  var ln = new ListNode(-1);//创建一个头元素为-1的链表
  var current =ln;//获取三个链表的头元素
  //console.log(l1);
  //console.log(l2);
    while(current1 && current2){//当l1和l2不为空
        if(current1.val<=current2.val){//排序
            current.next = current1
            current1 = current1.next;
        } else {
            current.next = current2;
            current2 = current2.next;
        }
        current = current.next;//指针后移一位
    }
    //当其中一个链表为空，将另一个链表剩余元素全部链接上
    if(current1){
        current.next = current1;
    } else {
        current.next = current2;
    }
    return ln.next;
};
console.log(mergeTwoLists([1,2,4],[1,3,4]));
//console.log(mergeTwoLists([1,2,4],[]));
//console.log(mergeTwoLists([1,2,3],[4,5,6]));
