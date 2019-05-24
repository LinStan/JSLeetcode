// 执行用时: 436 ms, 在Count Primes的JavaScript提交中击败了48 .88 % 的用户
// 内存消耗: 134.7 MB, 在Count Primes的JavaScript提交中击败了11 .65 % 的用户
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    if (n <= 2) {
        return 0
    }
    // 生成一个0-n-1的数组
    let temp = [...new Array(n).keys()];
    temp[0] = temp[1] = null
    // console.log(temp)
    for (let i = 2; i < n; i++) {
        for (let j = 2; i * j <= n; j++) {
            temp[i * j] = null;
        }
    }
    //筛一下非null的值 filter是es6的一个数组方法，可以对数组进行一个筛选
    temp = temp.filter(function (a) {
        return a != null
    })
    // console.log(temp)
    return temp.length
};
// 基础解法
// var countPrimes = function (n) {
//     let ret = 0,
//         flag = 1;
//     if (n < 2) {
//         return 0
//     }
//     for (let i = 1; i < n; i++) {
//         for (let j = 2; j <= Math.sqrt(i); j++) {
//             if (i % j == 0) {
//                 flag = 0;
//                 break;
//             }
//         }
//         if (flag == 2) {
//             ret++;
//         } else {
//             flag = 2;
//         }
//     }
//     return ret
// };