/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  let h = nums.length;
  let l = nums[0].length;
  if (r * c != h * l) {
    return nums
  }
  let ret = [];
  let temp = [];
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < l; j++) {
      temp.push(nums[i][j])
    }
  }
  // console.log(temp)
  for (let i = 0; i < r; i++) {
    ret[i] = temp.splice(0, c)
  }
  // console.log(ret)
  return ret
};