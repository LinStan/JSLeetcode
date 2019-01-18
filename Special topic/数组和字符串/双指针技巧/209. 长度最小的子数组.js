/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
 //执行用时: 104 ms, 在Minimum Size Subarray Sum的JavaScript提交中击败了45.77% 的用户
var minSubArrayLen = function(s, nums) {
    var n = nums.length;
    var re=Number.MAX_SAFE_INTEGER;
    var l = 0,r = 0;
    var tempre = 0;
    while(l<n)
        {
            if(r<n&&tempre<s)
                {
                    tempre+=nums[r];
                    r++;
                }
            else
                {
                    tempre-=nums[l];
                    l++;
                }
            if(tempre>=s){re = Math.min(re,r-l)}
        }
    if(re==Number.MAX_SAFE_INTEGER){return 0}
    return re
};
