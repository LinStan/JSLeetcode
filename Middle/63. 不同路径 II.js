/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// 执行用时: 88 ms, 在Unique Paths II的JavaScript提交中击败了89 .23 % 的用户
// 内存消耗: 36.1 MB, 在Unique Paths II的JavaScript提交中击败了13 .56 % 的用户
// 本题主要是有一个障碍物的设定，因此可以直接沿用62的代码，添加上条件判断即可
var uniquePathsWithObstacles = function (obstacleGrid) {
  let n = obstacleGrid.length,
    m = obstacleGrid[0].length;
  let temp = [];
  for (let i = 0; i < n; i++) {
    // 由于初始格子填充的0，因此后续的障碍物格子不用再赋值
    temp[i] = Array(m).fill(0)
  }
  // console.log(temp)
  // 如果起点或终点有障碍物直接判0
  if (obstacleGrid[0][0] == 1 || obstacleGrid[n - 1][m - 1] == 1) {
    return 0
  }
  // i小于列
  for (i = 0; i < n; i++) {
    // j<行
    for (let j = 0; j < m; j++) {
      if (i == 0 && j == 0) {
        temp[i][j] = 1;
      } else if (i == 0) {
        // 顶边若前一格存在障碍物，即无法到达
        if (obstacleGrid[i][j] != 1 && temp[i][j - 1] != 0) {
          temp[i][j] = 1;
        } else {
          temp[i][j] = 0;
        }
      } else if (j == 0) {
        // 左边同理
        if (obstacleGrid[i][j] != 1 && temp[i - 1][j] != 0) {
          temp[i][j] = 1;
        } else {
          temp[i][j] = 0;
        }
      } else if (obstacleGrid[i][j] != 1) {
        // 剩余格子同理，存在障碍物的格子不做判断
        // 如果不是边上， 当前点的到达方式是i - 1, j和i， j - 1 的和
        temp[i][j] = temp[i - 1][j] + temp[i][j - 1]
      }
    }
  }
  // console.log(temp);
  return temp[n - 1][m - 1]
};