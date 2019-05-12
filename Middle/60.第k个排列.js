/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  var arr = [],
    num = [],
    result = '',
    i;
  for (i = 1; i <= n; i++) {
    arr.push(i);
    num.push(0);
  }
  k = k - 1;
  i = 0;
  if (k === 0) {
    return arr.join('');
  }
  while (k > 0) {
    num[i] = parseInt(k / getFactorial(n - 1));
    k = k % getFactorial(n - 1);
    n--;
    i++;
  }
  for (i = 0; i < num.length; i++) {
    result += arr[num[i]];
    arr.splice(num[i], 1);
  }
  return result;
};

function getFactorial(n) {
  var result = 1;
  if (n === 0) {
    return 0;
  }
  while (n > 1) {
    result *= n;
    n--;
  }
  return result;
}
console.log(getPermutation(3, 3))