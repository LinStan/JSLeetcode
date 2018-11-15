/**
 * @param {number[]} nums
 * @return {boolean}
 */
//最大可跳跃步长
var canJump = function(nums) {
    var l = nums.length;
    var temp = nums[0];//贪心算法。
    for(var i = 1;i<l;i++)
        {
            //每次移动一格，对应的temp-1,temp是最大可跳跃距离
            temp--;
            if(temp<0){return false}
            temp = Math.max(nums[i],temp);
        }
    return temp>=0
};
//console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
//console.log(canJump([0]));
//console.log(canJump([0,5]));
//console.log(canJump([1,0]));
//console.log(canJump([2,5,0,0]));
console.log(canJump([2,2,0,2,0,0]));
