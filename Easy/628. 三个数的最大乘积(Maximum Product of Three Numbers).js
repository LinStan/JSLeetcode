/**
 * @param {number[]} nums
 * @return {number}
 */
 //执行用时: 180 ms, 在Maximum Product of Three Numbers的JavaScript提交中击败了21.74% 的用户
var maximumProduct = function(nums) {
    var l = nums.length;
    nums.sort(function(a,b){return a-b});
    var temp1 = nums[0]*nums[1]*nums[l-1];
    var temp2 = nums[l-1]*nums[l-2]*nums[l-3];
    if(temp1>temp2){return temp1}
    else
        {return temp2}
};
