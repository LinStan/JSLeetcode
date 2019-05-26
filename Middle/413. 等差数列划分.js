/**
 * @param {number[]} A
 * @return {number}
 */
// 执行用时: 84 ms, 在Arithmetic Slices的JavaScript提交中击败了93.88 % 的用户
// 内存消耗: 34.1 MB, 在Arithmetic Slices的JavaScript提交中击败了42.31 % 的用户
//该题的等差数列是指的连续的子数组，因此直接从尾部开始判断，以当前元素作为尾部元素的等差数列数量
var numberOfArithmeticSlices = function (A) {
  let l = A.length, count = 0;
  if (l <= 2) { return 0 }
  for (let i = l - 1; i >= 2; i--) {
    // 每次重新计算等差值
    let temp = A[i] - A[i - 1];
    // j-1下标  因此>0
    for (let j = i - 1; j > 0; j--) {
      if (temp == A[j] - A[j - 1]) {
        count++
      }
      else {
        break;
      }
    }
  }
  return count
};