/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    var i = 1;
    if(n==1){return true}
    for(;Math.pow(2,i)<=n;i++)
        {
            if(Math.pow(2,i)==n){return true}
        }
    return false
};
