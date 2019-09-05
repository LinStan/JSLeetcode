/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (!nums || nums.length === 0) return 0;
  let tempSum = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (i === 0) {
      //第一个最大值，第二个最小值
      tempSum[i] = [num, num];
    } else if (nums[i] < 0) {
      //若为-，最大值为当前值×上一轮最小值
      tempSum[i] = [Math.max(num, num * tempSum[i - 1][1]), Math.min(num, num * tempSum[i - 1][0])]
    } else {
      //若为+，最大值为当前在*上一轮最大值
      tempSum[i] = [Math.max(num, num * tempSum[i - 1][0]), Math.min(num, num * tempSum[i - 1][1])];
    }
  }
  console.log(tempSum)
  let ret = []

  tempSum.map((v) => { ret.push(v[0]) })
  return Math.max(...ret);
};

console.log(maxProduct([2, 3, -2, 4]))