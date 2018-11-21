/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    /*
    //0.75%
    var num = 0;
    var flag5 =0;
    for(var i = 1;i<=n;i++)
        {
            var temp = i;
            while(temp%5==0){flag5++;temp = temp/5;}
        }
    return flag5;
    */
    //执行用时: 80 ms, 在Factorial Trailing Zeroes的JavaScript提交中击败了74.63% 的用户
    let count = 0;
    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    }
    return count;
};
