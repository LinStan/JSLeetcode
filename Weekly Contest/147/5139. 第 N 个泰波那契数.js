/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let temp = [0, 1, 1]
  for (let i = 3; i <= n; i++) {
    temp[i] = temp[i - 1] + temp[i - 2] + temp[i - 3]
  }
  return temp[n]
};