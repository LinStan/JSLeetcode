/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let ret = 0,
        flag = 1;
    if (n < 2) {
        return 0
    }
    for (let i = 1; i < n; i++) {
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                flag = 0;
                break;
            }
        }
        if (flag == 2) {
            ret++;
        } else {
            flag = 2;
        }
    }
    return ret
};