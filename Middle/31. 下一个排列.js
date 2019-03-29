/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function swap(nums, i, j) {

  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
  return nums
}
//大概思路
// 找到nums[i] 比nums[i+1]小的时候，就将nums[i]跟nums[i+1]到nums[nums.length - 1]当中找到一个最小的比nums[i]大的元素交换。交换后，再把nums[i+1]到nums[nums.length-1]排序
var nextPermutation = function (nums) {
  let flag = 0;
  let l = nums.length;
  for (var i = l - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      break;
    }
  }
  if (i == 0) {
    nums.sort((a, b) => a - b)
  } else {
    let p = l - 1,
      temp;
    while (p > i) {
      if (nums[i - 1] < nums[p]) {
        break;
      }
      p--;
    }
    swap(nums, i - 1, p)
    temp = nums.splice(i)
    temp.sort((a, b) => a - b)
    // nums = nums.concat(temp)
    nums.push(...temp)
  }
};
console.log(nextPermutation([1, 3, 2]))
console.log(nextPermutation([1, 2, 3]))
console.log(nextPermutation([3, 2, 1]))