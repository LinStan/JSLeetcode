/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var l = nums.length;
    //if(nums[0]===target){return 0}
    if(nums[0]>target)
    {
      var index = l-1;
      for(;index>=0;index--)
        {
          if(nums[index]===target){return index}
          if(nums[index]<nums[index-1]){return -1}
        }
        return  -1;
    }
    else
    {
      for(var i = 0;i<l;i++)
        {
          if(nums[i]===target){return i}
          if(nums[i]>nums[i+1]){return -1}
        }
        return  -1;
    }

};
console.log(search([4,5,6,7,0,1,2],6));
