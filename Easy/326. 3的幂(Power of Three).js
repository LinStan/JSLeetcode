/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    var i = 1;
    if(n==1){return true}
    for(;Math.pow(3,i)<=n;i++)
        {
            if(Math.pow(n,1/i)==3){return true}
           // console.log(Math.pow(3,i));
        }
    return false
};
