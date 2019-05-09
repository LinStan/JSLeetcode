/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let current = head;
  let pre = head;
  while (current) {
    if (current.val === val) {
      if (current === head) {
        head = current.next;
        pre = head;
      } else {
        pre.next = current.next;
      }
    } else {
      pre = current;
    }
    current = current.next;
  }
  return head;
};