/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // 0子树情况要置为1  
  let dp = [1, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = 0;
    for (let j = 0; j < i; j++) {
      // 由于 一个i节点的可以分割为 左边j，右边i-j-1  因此可能的种类就是j的情况*i-j-1的情况
      // 其中j取值可以是0~i-1
      dp[i] += (dp[j] * dp[i - j - 1])
    }
  }
  return dp[n]
};