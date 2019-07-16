// 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。
// 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被计为是不同的子串。
// 输入: "abc"
// 输出: 3
// 解释: 三个回文子串: "a", "b", "c".
/**
 * @param {string} s
 * @return {number}
 */
// 执行用时:680 ms  , 在所有 JavaScript 提交中击败了17.65 %  的用户
// 内存消耗:37.7 MB  , 在所有 JavaScript 提交中击败了38.89 %  的用户
// n2时间复杂度的方法
// var countSubstrings = function (s) {
//   let l1 = s.length, temp, ret = 0;
//   for (let i = 0; i < l1; i++) {
//     for (let j = i + 1; j <= l1; j++) {
//       temp = s.slice(i, j)
//       // console.log(temp)
//       if (isHuiwen(temp)) {
//         ret++;
//       }
//     }
//   }
//   return ret
// };
// var isHuiwen = function (str) {
//   let i = 0, j = str.length - 1;
//   while (i <= j) {
//     if (str[i] != str[j]) { return false }
//     i++ , j--;
//   }
//   return true
// }

// 执行用时: 84 ms, 在所有 JavaScript 提交中击败了98.53 % 的用户
// 内存消耗:35.5 MB  , 在所有 JavaScript 提交中击败了55.56 %  的用户
// 中心扩展法，从当前位置向两边延申
var countSubstrings = function (s) {
  let l = s.length, temp, ret = 0;
  var isHuiwen = function (str, s, e) {
    while (s >= 0 && e < l) {
      if (str[s--] == str[e++]) {
        ret++
      }
      else { break }
    }
    return
  }
  for (let i = 0; i < l; i++) {
    isHuiwen(s, i, i)
    isHuiwen(s, i, i + 1)
  }
  return ret
};
