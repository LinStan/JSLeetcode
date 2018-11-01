/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var l = nums.length;
    var re =[];
    for(var i = 0;i<l;i++)
        {
            re[i]=1;
            for(var j = 0;j<l;j++)
                {
                    if(j ==i)
                        {
                            re[i]=re[i];
                            continue;
                        }
                    re[i]= re[i]*nums[j];
                }
        }
    return re;
};
