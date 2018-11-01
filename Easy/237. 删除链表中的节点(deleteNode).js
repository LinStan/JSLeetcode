/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    //妈的有毒。为什么直接node=node.next不行
    node.val = node.next.val;
    node.next = node.next.next;
    //console.log(node)
};
