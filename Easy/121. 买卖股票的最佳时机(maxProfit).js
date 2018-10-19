/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var re = 0;
    var l = prices.length;
    for(var i = 0;i<l;i++)
        {
            for(var j = i;j<l;j++)
                {
                    var temp = prices[j]-prices[i];
                    if(temp>re){re=temp;}
                }
        }
    return re;
};
