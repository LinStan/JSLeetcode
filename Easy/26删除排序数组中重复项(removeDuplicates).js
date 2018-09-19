/*
给定数组 nums = [1,1,2],
函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。
你不需要考虑数组中超出新长度后面的元素。
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var nums = [1,2,2,5,6,6,6,6,6,9];
var removeDuplicates = function(nums) {
  var len = nums.length;
  var temp = 0;
  if(len===0){return 0}
  for(var i=0;i<len;i++)
  {
    if(nums[i]!=nums[i+1])
    {
      nums[temp]=nums[i];
      temp = temp+1;
    }
  }
    return temp
};
//输出数组元素
var len = removeDuplicates(nums);
for(var i=0;i<len;i++)
{
  console.log(nums[i]);
}
//console.log(removeDuplicates([1,2,3]));
