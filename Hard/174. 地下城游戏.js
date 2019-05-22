/**
 * @param {number[][]} dungeon
 * @return {number}
 */
//逆向动态规划
// 执行用时 : 96 ms, 在Dungeon Game的JavaScript提交中击败了100.00% 的用户
// 内存消耗 : 35.8 MB, 在Dungeon Game的JavaScript提交中击败了80.00% 的用户
var calculateMinimumHP = function (dungeon) {
  let h = dungeon.length,
    l = dungeon[0].length,
    temp = [];
  for (let i = 0; i < h; i++) {
    temp[i] = Array(l).fill(0)
  }
  // console.log(temp)
  //初始化二维数组
  // 最低生命值为1
  for (let i = h - 1; i >= 0; i--) {
    for (let j = l - 1; j >= 0; j--) {
      if (i == h - 1 && j == l - 1) {
        // 保存到达当前点所需的生命值，如果小于1，置为1
        // 例如 该点为-6 则该点所需为 7 
        temp[i][j] = Math.max(1, 1 - dungeon[i][j])
      } else if (i == h - 1) {
        // 因为只能向右走，因此 该点所需生命为左侧点的生命-该点的权重 即该点为负数就将其加到最小hp上
        // 例如 [[-1,-2],[-3,-4]] -4点的生命为5 然后-3点的生命便是8
        temp[i][j] = Math.max(1, temp[i][j + 1] - dungeon[i][j])
      } else if (j == l - 1) {
        //同理
        temp[i][j] = Math.max(1, temp[i + 1][j] - dungeon[i][j])
      } else {
        // temp保存的是到当前点所需最小生命 选取下方和右侧较小的一个，并和当前的权重相减，若<0，取1，若>0，取较大值
        temp[i][j] = Math.max(1, Math.min(temp[i][j + 1], temp[i + 1][j]) - dungeon[i][j])
      }
    }
  }
  // console.log(temp)
  // [[-2,-3,3],[-5,-10,1],[10,30,-5],[10,30,-5]]
  return temp[0][0]
};