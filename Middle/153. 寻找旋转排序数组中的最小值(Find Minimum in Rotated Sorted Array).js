/**
 * @param {number[]} nums
 * @return {number}
 */
 //1832ms 直接诶for
 /*
var findMin = function(nums) {
    var min = nums[0];
    for(var i = 1, ilen = nums.length; i < ilen; i+=1) {
        if(nums[i] < min) {
            min = nums[i];
        }
    }
    return min;
};
*/
//执行用时: 72 ms, 在Find Minimum in Rotated Sorted Array的JavaScript提交中击败了72.82% 的用户
var findMin = function(nums) {
    var l = nums.length;
    if(nums[0]<=nums[l-1])
        {return nums[0]}
    else
        {
            for(var i=0,j=l-1;i<=j;)
                {
                    if(nums[i]<nums[0])
                        {return nums[i]}
                    else
                        {i++}
                    if(nums[j]<nums[j-1])
                        {return nums[j]}
                    else{j--}
                }
        }
};
