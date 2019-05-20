/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 执行用时: 88 ms, 在House Robber的JavaScript提交中击败了90.11 % 的用户
// 内存消耗: 33.8 MB, 在House Robber的JavaScript提交中击败了20.79 % 的用户
var rob = function (nums) {
  let l = nums.length;
  if (l == 0) {
    return 0
  } else if (l == 1) {
    return nums[0]
  } else if (l == 2) {
    return Math.max(nums[0], nums[1])
  }
  let temp = [nums[0], Math.max(nums[0], nums[1])]
  for (let i = 2; i < l; i++) {
    temp[i] = Math.max(temp[i - 1], nums[i] + temp[i - 2])
  }
  return temp[l - 1]
};