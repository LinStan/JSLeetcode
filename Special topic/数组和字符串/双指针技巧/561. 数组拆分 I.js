/**
 * @param {number[]} nums
 * @return {number}
 */
 //已经战胜 11.91 % 的 javascript 提交记录
var arrayPairSum = function(nums) {
    var l = nums.length;
    var re = 0;
    nums = nums.sort(
    function(a,b)
    {return a-b})
   // console.log(nums)
    for(var i = 0;i<(l/2);i++)
        {
            re = re+nums[2*i];
         //   console.log(re,i)
        }
    return re;
};
