/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var nums =[2,2,2,2],val =2;
 var nums =[2,2,2,3,3,3],val =2;
var removeElement = function(nums, val) {
  var len = nums.length;
  var temp=0;
    if(nums.length==0){return 0}
    for(var i=0;i<len;i++)
    {
      if(nums[i]!=val)
      {
        nums[temp]=nums[i];
        temp+=1;
      }
    }
    return temp;
};
//输出数组元素，方便自己查看效果，不用提交
var len = removeElement(nums,val);
for(var i=0;i<len;i++)
{
  console.log(nums[i]);
}
