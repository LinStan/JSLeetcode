/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 //从后向前排序
var merge = function(nums1, m, nums2, n) {
    // splice(position, numberOfItemsToRemove, item)
    // 拼接函数(索引位置, 要删除元素的数量, 元素)
    while(m > 0 && n > 0){
        if(nums1[m - 1] > nums2[n - 1]){
            nums1[m+n-1] = nums1[m-1];
            m--;
        } else {
            nums1[m+n-1] = nums2[n-1];
            n--;
        }
    }
    //当nums1为空，即nums1大于nums2,剩下的nums2的元素直接填入nums1即可
    while(n > 0) {
        nums1[n - 1] = nums2[n - 1];
        n--;
    }
    console.log(nums1);
};
console.log(merge([1,2,2,0,0,0],3,[4,5,6],3));
console.log(merge([2,0,0,0],1,[1,3,4],3));
console.log(merge([9,0,0,0],1,[1,3,4],3));
console.log(merge([9,0,0,0,0],1,[1,3,4],3));
