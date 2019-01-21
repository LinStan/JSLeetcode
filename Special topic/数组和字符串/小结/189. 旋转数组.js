/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 //144 ms 已经战胜 40.80 % 的 javascript 提交记录
var rotate = function(nums, k) {
    k = k%(nums.length);
    let tmp = nums.splice(nums.length - k)
    nums.unshift(...tmp)
};
