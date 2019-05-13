/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
// √ Your runtime beats 99.74 % of javascript submissions
// √ Your memory usage beats 58.22 % of javascript submissions(39.6 MB)
// 笨办法 直接遍历，然后两端向中间存储
var isPalindrome = function (head) {
  let temp = [],
    cur = head;
  while (cur) {
    temp.push(cur.val);
    cur = cur.next;
  }
  // if (temp.length % 2 != 0) {
  //   return false
  // }
  for (let i = 0, j = temp.length - 1; i < j; i++, j--) {
    if (temp[i] != temp[j]) {
      return false
    }
  }
  return true
};