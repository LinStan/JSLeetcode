/**
 * @param {number[]} nums
 * @return {number}
 */
/*
不能更改原数组（假设数组是只读的）。
只能使用额外的 O(1) 的空间。
时间复杂度小于 O(n2) 。
数组中只有一个重复的数字，但它可能不止重复出现一次。
*/
//428 ms, 在Find the Duplicate Number的JavaScript提交中击败了27.70% 的用户
//穷举
var findDuplicate = function(nums) {
    var l = nums.length;
    for(var i = 0;i<l-1;i++)
        {
            for(var j =i+1;j<l;j++)
                {
                    if(nums[i]==nums[j]){return nums[i]}
                }
        }
};
