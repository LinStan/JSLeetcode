/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 /*
 我的提交执行用时已经战胜 46.71 % 的 javascript 提交记录
 	172 ms	15.4 MB
  */
var twoSum = function(nums, target) {
    let l = nums.length;
    for(let i = 0;i<l-1;i++)
        {
            for(let j = i+1;j<l;j++)
                {
                    if(nums[i]+nums[j]==target)
                        {return [i,j]}
                }
        }
};
