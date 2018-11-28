/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 //执行用时: 84 ms, 在Number of 1 Bits的JavaScript提交中击败了76.42% 的用户

var hammingWeight = function(n) {
    var re =n.toString(2);
    var l = re.length;
    var num=0;
    for(var i = 0;i<l;i++)
        {
            if(re[i]==1)
                {
                    num++;
                }
        }
    return num;

};
