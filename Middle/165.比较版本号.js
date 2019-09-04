/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
// 执行用时:
// 80 ms
//   , 在所有 JavaScript 提交中击败了
// 48.42 %
//   的用户
// 内存消耗:
// 33.9 MB
//   , 在所有 JavaScript 提交中击败了
// 17.39 %
//   的用户
var compareVersion = function (version1, version2) {
  version1 = version1.split('.').map((v) => { return v * 1 })
  version2 = version2.split('.').map((v) => { return v * 1 })
  console.log(version1, version2)
  let i = 0;
  while (i < version1.length || i < version2.length) {
    if (version1[i] == undefined) { version1[i] = 0 }
    if (version2[i] == undefined) { version2[i] = 0 }
    if (version1[i] > version2[i]) { return 1 }
    if (version1[i] < version2[i]) { return -1 }
    i++
  }
  return 0
};