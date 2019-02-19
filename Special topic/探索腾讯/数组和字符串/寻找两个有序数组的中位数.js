/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 /*
 480 ms	26.9 MB
javascript
我的提交执行用时
已经战胜 4.19 % 的 javascript 提交记录
 */
var findMedianSortedArrays = function(nums1, nums2) {
    for(var i=0;i<nums2.length;i++)
    {
　　nums1.push(nums2[i]);
    }
    nums2 = null;
    nums1 = nums1.sort(function(a,b){return a-b;})
    console.log(nums1)
    let n = nums1.length;
    if(n%2==1)
        {
            return nums1[Math.floor(n/2)]
        }
    else
        {
            return (nums1[n/2]+nums1[n/2-1])/2
        }
};
