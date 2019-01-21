/**
 * @param {number[]} nums
 * @return {number}
 */
 //已经战胜 60.92 % 的 javascript 提交记录
var removeDuplicates = function(nums) {
    let l = nums.length;
    let temp = 0;
    if(l==0){return 0}
    for(let i = 0;i<l;i++)
        {
            if(nums[i]!=nums[i+1])
                {
                    nums[temp]=nums[i];
                    temp++;
                }
        }
    return temp;
};
