/**
 * @param {number[]} nums
 * @return {number}
 */
 //172 ms, 在Find Peak Element的JavaScript提交中击败了2.21% 的用户
var findPeakElement = function(nums) {
    var l = nums.length;
    if(l==1){return 0}
    if(nums[1]<nums[0]){return 0}
    if(nums[l-1]>nums[l-2]){return l-1}
    for(var i =1;i<l-1;i++)
        {
            if(nums[i]>nums[i-1]&&nums[i]>nums[i+1])
                {
                    return i
                }
        }
};
