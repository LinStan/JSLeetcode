/**
 * @param {number[][]} points
 * @return {number}
 */
// 直接使用三层循环去做，面积使用坐标公式去计算
// 执行用时: 96 ms, 在Largest Triangle Area的JavaScript提交中击败了100.00 % 的用户
// 内存消耗: 35.3 MB, 在Largest Triangle Area的JavaScript提交中击败了90.91 % 的用户
// S = |(x1 · y2 - x2 · y1) + (x2 · y3 - x3 · y2) + (x3 · y1 - x1 · y3)| / 2
var largestTriangleArea = function (points) {
  let l = points.length,
    ret = 0;
  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
      for (let k = j + 1; k < l; k++) {
        ret = Math.max(ret, Math.abs((points[i][0] * points[j][1] - points[i][1] * points[j][0]) +
          (points[j][0] * points[k][1] - points[k][0] * points[j][1]) + (points[k][0] * points[i][1] - points[i][0] * points[k][1])
        ) / 2)
      }
    }
  }
  return ret
};