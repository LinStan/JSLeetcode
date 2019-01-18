/**
 * @param {number[]} nums
 * @return {number}
 */
 //已经战胜 31.31 % 的 javascript 提交记录
var findMaxConsecutiveOnes = function(nums) {
    var l = nums.length;
    var re = 0;
    for(var i = 0;i<l;)
        {
            if(nums[i]!=1){i++}
            else
                {
                    let j = 0;
                    while(nums[i+j]==1)
                        {
                            j++;
                        }
                    if(re<(j))
                        {
                            re = j;
                        }
                    i = i+j;
                 //   console.log(re,i,j)
                }
        }
    return re;
};
