/**
 * @param {number} num
 * @return {boolean}
 */
 //6688 ms, 在Perfect Number的JavaScript提交中击败了3.05% 的用户
var checkPerfectNumber = function(num) {
    if(num==0){return false}
    var re = num;
    for(var i = 0;i<=num/2;i++)
        {
            if(num%i==0)
                {re = re-i}
        }
    return re==0
};
