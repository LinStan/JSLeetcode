/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let ret = parseInt(dividend / divisor)
  //蠢方法
  if (ret > 2147483647) {
    return 2147483647
  }
  if (ret < -2147483648) {
    return -2147483648
  }
  return ret
};