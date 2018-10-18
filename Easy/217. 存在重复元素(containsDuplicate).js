/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  for(var i = 0;i<nums.length;i++)
  {
    for(var j = i+1;j<nums.length;j++)
    {
      if(nums[i]==nums[j]){return true}
    }
  }
  return false;
};
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([0,0,3,2]));
