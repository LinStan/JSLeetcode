/**
 * @param {number[]} piles
 * @return {boolean}
 */
// 先手可以自行控制拿走全奇数或者全偶数石子 因此必胜
// 执行用时 : 80 ms, 在Stone Game的JavaScript提交中击败了98.78% 的用户
// 内存消耗 : 33.9 MB, 在Stone Game的JavaScript提交中击败了13.95% 的用户
// var stoneGame = function(piles) {
//     return true
// };
// 设定i,j存储的是从i到j alex可以获得的最大值
var stoneGame = function (piles) {
  let l = piles.length;
  let temp = [];
  for (let i = 0; i < l; i++) {
    temp[i] = Array(l).fill(0);
  }
  // console.log(temp)
  //当从i到i 当前石子堆就是最大值
  for (i = 0; i < l; i++) {
    temp[i][i] = piles[i]
  }
  //从j到j+1
  for (i = 1; i < l; i++) {
    for (let j = 0; j < l - i; j++) {
      // 如果li拿走的是顶部，计算顶部最优值-后续的值，如果拿走的是底部，道理类似
      temp[j][j + i] = Math.max(temp[j][j] - temp[j + 1][j + i], temp[j + i][j + i] - temp[j][i + j - 1])
    }
  }
  // console.log(temp)
  return temp[0][l - 1] > 0
};