/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var l = nums.length;
    var temp = nums[0];
    for(var i = 0;i<l-1;i++)
        {
            for(var j = 0;j<l;j++)
                {
                    if(j==i){continue;}
                    var flag=0;
                    if(nums[i]==nums[j])
                    {
                        flag=1;
                        break;
                    }
                }
            if(flag==0)
            {return nums[i];}
        }
    return nums[l-1];
};
