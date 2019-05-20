// 执行用时 : 88 ms, 在Min Cost Climbing Stairs的JavaScript提交中击败了97.26% 的用户
// 内存消耗 : 35.7 MB, 在Min Cost Climbing Stairs的JavaScript提交中击败了39.13% 的用户
/**
 * @param {number[]} cost
 * @return {number}
 */
// 由于是爬楼梯， 因此如果你到达了当前格子， 就必须加上当前格的权重。 由于爬梯可以选择1步或者2步走。
// 因此到达当前格的最小值为Math.min(temp[i - 2], temp[i - 1])
var minCostClimbingStairs = function (cost) {
  cost.push(0)
  let l = cost.length;
  let temp = [cost[0], cost[1]]
  for (let i = 2; i < l; i++) {
    temp[i] = cost[i] + Math.min(temp[i - 2], temp[i - 1])
    // console.log(temp)
  }
  return temp[l - 1]
};