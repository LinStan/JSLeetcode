/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var l = nums.length;
    var y =0;//y是非零的位置
    for(var i = 0;i<l;i++)
        {
            //当numsi非零，numsi和numsy互换。并且y++
            if(nums[i]!=0)
                {
                    var temp = nums[i];
                    nums[i]=nums[y];
                    nums[y]=temp;
                    y++;
                }
        }
};
