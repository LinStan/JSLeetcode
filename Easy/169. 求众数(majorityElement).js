/**
 * @param {number[]} nums
 * @return {number}
 */
var count = function(nums,k)
 {
   var flag = 0;
   for(var i = 0;i<nums.length;i++)
   {
     if(nums[i]==k){flag=flag+1}
   }
   return flag;
 }
var majorityElement = function(nums) {
    for(var i = 0;i<nums.length/2;i++)
    {
      if(count(nums,nums[i])>=nums.length/2){return nums[i]}
    }
};
console.log(majorityElement([2,2,1,1,1,2,2]));
console.log(majorityElement([2,33,22,22]));
