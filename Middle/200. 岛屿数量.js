/**
 * @param {character[][]} grid
 * @return {number}
 */
// 执行用时: 72 ms, 在Number of Islands的JavaScript提交中击败了100.00 % 的用户 
// 内存消耗: 38.5 MB, 在Number of Islands的JavaScript提交中击败了44.55 % 的用户
var numIslands = function (grid) {
  let h = grid.length;
  if (grid == [] || h == 0) {
    return 0
  }
  let l = grid[0].length,
    count = 0;
  if (l == 0) {
    return 0
  }
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < l; j++) {
      if (grid[i][j] == '1') {
        findl(i, j, grid)
        count++;
      }
    }
  }
  return count
};
var findl = function (i, j, grid) {
  let h = grid.length,
    l = grid[0].length;
  grid[i][j] = 2
  if (i > h - 1 && j > l - 1) {
    return
  }
  if (i > 0 && grid[i - 1][j] == '1') {
    findl(i - 1, j, grid)
  }
  if (i < h - 1 && grid[i + 1][j] == '1') {
    findl(i + 1, j, grid)
  }
  if (j > 0 && grid[i][j - 1] == '1') {
    findl(i, j - 1, grid)
  }
  if (j < l - 1 && grid[i][j + 1] == '1') {
    findl(i, j + 1, grid)
  }
}