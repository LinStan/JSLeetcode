/**
 * @param {number[]} nums
 * @return {number}
 */
//76ms 已经战胜 78.60 % 的 javascript 提交记录
var maxnum = function(nums)
{
    var temp = 0;
    for(var i = 0;i<nums.length;i++)
        {
            if(nums[i]>nums[temp])
                {temp = i}
        }
    return temp;
}
var dominantIndex = function(nums) {
    var l = nums.length;
    var max = maxnum(nums);
    console.log(max)
    for(let i = 0;i<l;i++)
        {
            if(i==max)
                {continue;}
            if(nums[max]<(nums[i]*2))
                {
                    return -1
                }
        }
    return max;
};
