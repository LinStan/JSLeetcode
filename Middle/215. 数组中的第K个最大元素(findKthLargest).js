/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function sortNumber(a,b)
{
return a - b
}
function sortnums(nums)
{
  var l = nums.length;
  for(var i = 0;i<l;i++)
  {
    for(var j = i;j<l;j++)
    {
      if(nums[i]>nums[j])
      {
      var temp = nums[i];
      nums[i]=nums[j];
      nums[j]=temp;
      }
    }
  }
  return nums;
}
var findKthLargest = function(nums, k) {
  var l =nums.length;
  sortnums(nums);//自己写的排序
  return nums[l-k];
  //JS自带排序
  var re = nums.sort(sortNumber);
  return re[l-k];
};

console.log(findKthLargest([3,2,3,1,2,4,5,5,6,3],4));
console.log(findKthLargest([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6],2));
