// 执行用时: 116 ms, 在House Robber II的JavaScript提交中击败了25 .58 % 的用户
// 内存消耗: 33.5 MB, 在House Robber II的JavaScript提交中击败了70 .97 % 的用户
// 就是对第一家是否偷盗进行一个判断，然后两种情况分别进行dp
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let l = nums.length,
    temp1 = new Array(l).fill(0),
    temp2 = new Array(l).fill(0);
  if (l == 0) {
    return 0
  }
  if (l == 1) {
    return nums[0]
  }
  //偷第一家的情况
  temp1[0] = nums[0]
  temp1[1] = Math.max(nums[0], nums[1]);
  //不偷第一家的情况
  temp2[1] = nums[1];
  // console.log(temp1,temp2)
  for (let i = 2; i < l; i++) {
    temp2[i] = Math.max(temp2[i - 1], temp2[i - 2] + nums[i])
  }
  for (let i = 2; i < l - 1; i++) {
    temp1[i] = Math.max(temp1[i - 1], temp1[i - 2] + nums[i])
  }
  // console.log(temp1,temp2)
  return Math.max(temp1[l - 2], temp2[l - 1])
};