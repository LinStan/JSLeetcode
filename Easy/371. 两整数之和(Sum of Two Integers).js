/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 //60 ms, 在Sum of Two Integers的JavaScript提交中击败了100.00% 的用户
var getSum = function(a, b) {
    if(a==0){return b}
    if(b==0){return a}
    var temp = a^b;//不进位相加
    var temp1 = (a&b)<<1;//进位
    return getSum(temp,temp1)
};
