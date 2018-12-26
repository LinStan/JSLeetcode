/**
 * @param {number[]} nums
 * @return {number}
 */
 //92 ms 已经战胜 97.84 % 的 javascript 提交记录
var pivotIndex = function(nums) {
    var l = nums.length;
    if(l<3){return -1}
    var sum=0;
    for(var i = 0;i<l;i++)
        {
            sum+=nums[i];
        }
    var temp = 0;
    for(i = 0;i<l;)
        {
            if((sum-nums[i])/2==temp)
                {return i}
            temp +=nums[i];
            i++;
        }
    return -1;
};
