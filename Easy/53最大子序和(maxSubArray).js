/**
 * @param {number[]} nums
 * @return {number}
 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 之后改写为分治法
 */
var maxSubArray = function(nums) {
    var l = nums.length;
    var temp=0;
    var maxsum=-Math.pow(2, 53);//预置为最小
    for(var i=0;i<l;i++)
    {
      if(temp<0){temp=0}
      temp = temp+nums[i];
      if(temp>maxsum){maxsum = temp;}
    }
    return maxsum;
};
console.log(maxSubArray([-1,-2,-3]));
