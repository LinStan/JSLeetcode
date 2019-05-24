/**
 * @param {number[][]} triangle
 * @return {number}
 */
// 执行用时: 136 ms, 在Triangle的JavaScript提交中击败了18 .81 % 的用户
// 内存消耗: 34.8 MB, 在Triangle的JavaScript提交中击败了53 .09 % 的用户
// 直接底部向上dp 可以继续优化空间
// var minimumTotal = function (triangle) {
//   let h = triangle.length,
//     l = triangle[h - 1].length;
//   let temp = [];
//   for (let i = 0; i < l; i++) {
//     temp[i] = new Array(l).fill(0)
//   }
//   // console.log(temp)
//   for (let i = h - 1; i >= 0; i--) {
//     for (let j = 0; j <= l - (h - i); j++) {
//       // 最后一列的值就是当前值
//       if (i == l - 1) {
//         temp[i][j] = triangle[i][j]
//       } else {
//         temp[i][j] = Math.min(temp[i + 1][j], temp[i + 1][j + 1]) + triangle[i][j]
//       }
//     }
//   }
//   // console.log(temp)
//   return temp[0][0]
// };

// 执行用时: 84 ms, 在Triangle的JavaScript提交中击败了96 .04 % 的用户
// 内存消耗: 35.4 MB, 在Triangle的JavaScript提交中击败了12 .34 % 的用户
// 可以节省额外空间 
var minimumTotal = function (triangle) {
  let h = triangle.length,
    l = triangle[h - 1].length;
  let temp = new Array(l).fill(0);
  console.log(temp)
  for (let i = h - 1; i >= 0; i--) {
    for (let j = 0; j <= l - (h - i); j++) {
      // 最后一列的值就是当前值
      if (i == l - 1) {
        temp[j] = triangle[i][j]
      } else {
        temp[j] = Math.min(temp[j], temp[j + 1]) + triangle[i][j]
      }
    }
  }
  // console.log(temp)
  return temp[0]
};