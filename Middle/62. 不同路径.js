/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 执行用时 : 72 ms, 在Unique Paths的JavaScript提交中击败了98.61% 的用户
// 内存消耗 : 34.6 MB, 在Unique Paths的JavaScript提交中击败了45.45% 的用户
// 还是基础的动态规划题目， 类似64.最小路径和
// 主要考虑 当当前点在左边或者顶边上， 到达该点的路径只有一条， 
// 当在网格内部， 由于只能向右或者向下走， 因此到达该点的路径和就是他左边和上边格子的路径总和
// 迭代可得最终路径和。
var uniquePaths = function (m, n) {
  let temp = [];
  for (let i = 0; i < n; i++) {
    temp[i] = Array(m).fill(0)
  }
  // console.log(temp)
  // i小于列
  for (i = 0; i < n; i++) {
    // j<行
    for (let j = 0; j < m; j++) {
      if (i == 0 && j == 0) {
        temp[i][j] = 1;
      } else if (i == 0) {
        temp[i][j] = 1;
      } else if (j == 0) {
        temp[i][j] = 1;
      } else {
        // 如果不是边上， 当前点的到达方式是i - 1, j和i， j - 1 的和
        temp[i][j] = temp[i - 1][j] + temp[i][j - 1]
      }
    }
  }
  // console.log(temp);
  return temp[n - 1][m - 1]
};