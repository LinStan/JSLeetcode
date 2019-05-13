/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
// 快慢指针方法，通过设定两个步长不同的指针，如果是环形链表，必定有相遇的时候
// 注意两点，一是判断输入链表是否为空，或者是单节点的单个链表（后面这似乎不需要判断）
// 第二 需要判断快指针是否为空和快指针的后继是否为空。（无需判断慢指针是由于如果是单链表必定快指针先到达终点）
var hasCycle = function (head) {
  if (!head || !head.next) {
    return false
  }
  let fast = head.next,
    slow = head;
  while (slow != fast) {
    if (!fast || !fast.next) {
      return false
    }
    slow = slow.next;
    fast = fast.next.next
  }
  return true
};