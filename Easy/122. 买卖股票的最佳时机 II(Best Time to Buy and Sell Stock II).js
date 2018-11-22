/**
 * @param {number[]} prices
 * @return {number}
 */
 //执行用时: 80 ms, 在Best Time to Buy and Sell Stock II的JavaScript提交中击败了72.27% 的用户
var maxProfit = function(prices) {
    var l = prices.length;
    var re = 0;
    for(var i = 1;i<l;i++)
        {
            if(prices[i]-prices[i-1]>0)
                {re = re+prices[i]-prices[i-1]}
        }
    return re
};
