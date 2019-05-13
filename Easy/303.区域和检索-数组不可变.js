/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */
// 基于reduce求解 最后一个case超时
// /**
//  * @param {number[]} nums
//  */
// var NumArray = function (nums) {
//   this.temp = nums
// };

// /** 
//  * @param {number} i 
//  * @param {number} j
//  * @return {number}
//  */
// NumArray.prototype.sumRange = function (i, j) {
//   let t = this.temp.slice(i, j + 1),
//     ret = 0;
//   if (t.length == 1) {
//     return t[0]
//   }
//   t.reduce(function (preValue, curValue) {
//     return ret = preValue + curValue;
//   })
//   return ret
// };

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
/**
 * @param {number[]} nums
 */
// √ Your runtime beats 99.39 % of javascript submissions
// √ Your memory usage beats 36.36 % of javascript submissions(44.9 MB)
var NumArray = function (nums) {
  this.temp = nums
  this.ret = []
  let tt = 0;
  for (let i = 0; i < nums.length; i++) {
    tt = tt + nums[i]
    this.ret.push(tt)
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  // console.log(this.ret)
  if (j == i) {
    return this.temp[i]
  }
  if (i == 0) {
    return this.ret[j]
  }
  return this.ret[j] - this.ret[i - 1]
};