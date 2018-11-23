/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 //执行用时: 352 ms, 在Rotate Array的JavaScript提交中击败了11.87% 的用户
//不能直接slice将数组分为两段，要在原数组操作 修改方法
var rotate = function(nums, k) {
    var l = nums.length;
    var temp = k%l;
    while(k--)
        {
            var i = nums[l-1];
            for(var p = l-1;p>0;p--)
            {
            nums[p]=nums[p-1];
            }
            nums[0]=i;

        }
};
