/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 //已经战胜 11.23 % 的 javascript 提交记录
var moveZeroes = function(nums) {
    let l = nums.length;
    let flag=0;
    for(let i = 0;i<l;i++)
        {
            while(nums[i]==0)
                {
                    nums.splice(i,1);
                    flag++;
                }
        }
    while(flag>0)
        {
            l = nums.length
            nums.splice(l,0,0);
            flag--;
        }
};
