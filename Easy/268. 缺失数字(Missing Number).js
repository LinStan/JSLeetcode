/**
 * @param {number[]} nums
 * @return {number}
 */
/*
//464 ms 18.55%
var missingNumber = function(nums) {

    for(var i = 0;i<nums.length;i++)
        {
            if(nums.indexOf(i)==-1)
                {return i}
        }
    return nums.length
};
*/
//80 ms, 在Missing Number的JavaScript提交中击败了90.05% 的用户
var missingNumber = function(nums) {
    var re = 0;
    var x = 0;
    for(var i=0;i<nums.length;i++){
        x +=nums[i];
        re += i+1;
    }
    return re-x;
};
