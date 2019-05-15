/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
// 有问题
// var minPathSum = function (grid) {
//   let h = grid.length,
//     l = grid[0].length,
//     temp = [];
//   var getV = function (i, j, ret) {
//     if (i == h - 1 && j == l - 1) {
//       temp.push(ret);
//       ret = grid[0][0];
//       return
//     }
//     ret += grid[i][j]
//     if (i < h - 1) {
//       getV(i + 1, j, ret)
//     }
//     if (j < l - 1) {
//       getV(i, j + 1, ret)
//     }
//   }
//   getV(0, 0, grid[0][0]);
//   console.log(temp)
//   return Math.min.apply(null, temp)
// };
var minPathSum = function (grid) {
  let h = grid.length,
    l = grid[0].length;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < l; j++) {
      if (i == 0 && j == 0) continue;
      else if (i == 0) {
        grid[i][j] = grid[i][j] + grid[i][j - 1];
      } else if (j == 0) {
        grid[i][j] += grid[i - 1][j];
      } else grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }
  return grid[h - 1][l - 1]
};