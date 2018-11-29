/**
 * @param {number} n
 * @return {number}
 */
 // 132 ms, 在Arranging Coins的JavaScript提交中击败了61.48% 的用户
var arrangeCoins = function(n) {
    if(n==0){return 0}
    if(n<=2){return 1}
    for(var i = 1;i<n;i++)
        {
            if((1+i)*i/2>n)
                {return i-1}
            else if ((1+i)*i/2==n)
                {return i}
        }
};
