/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
 //100 ms, 在Jewels and Stones的JavaScript提交中击败了24.55% 的用户
var numJewelsInStones = function(J, S) {
    var lj = J.length;
    var ls = S.length;
    var num=0;
    for(var i = 0;i<ls;i++)
        {
            for(var j = 0;j<lj;j++)
                {
                    if(S[i]==J[j])
                        {
                            num++;
                            break;
                        }
                }
        }
    return num
};
