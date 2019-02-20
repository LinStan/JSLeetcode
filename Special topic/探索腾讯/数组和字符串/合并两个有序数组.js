/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 //108 ms	15.5 MB
 //已经战胜 22.58 % 的 javascript 提交记录
var merge = function(nums1, m, nums2, n) {
    for(let i=m;i<m+n;i++)
        {
            nums1[i]=nums2[i-m];
        }
    nums1.sort(function(a,b){return a-b})
};
//
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //从后向前排序。选出较大的一个排在最后。循环直到n or m为0
    while(m>0&&n>0)
        {
            if(nums1[m-1]>nums2[n-1])
                {
                    nums1[m+n-1]=nums1[m-1];
                    m--;
                }
            else
                {
                    nums1[m+n-1]=nums2[n-1];
                    n--;
                }
        }
    //当m为0 说明nums1[0]>nums2[0],将nums2剩余的赋值
    //当n为0.无需其他操作。因为nums1剩余无需变动
    while(n>0)
        {
            nums1[n-1]=nums2[n-1];
            n--;
        }
};
