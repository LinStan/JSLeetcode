/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 //96 ms, 在Intersection of Two Arrays的JavaScript提交中击败了41.94% 的用户
var loop = function(index,nums)
{
//由于是直接对数组操作，无需返回值
 if(index>=1)//>1的话会导致0、1位置的元素不对比
    {
        //console.log(nums,index)
        if(nums[index]==nums[index-1])
            {
                //若相同，删除当前元素
                nums.splice(index,1);
            }
        //递归循环去重
        loop(index-1,nums)
    }
}
var intersection = function(nums1, nums2) {
    //先对数组排序
    nums1 = nums1.sort
    (
        function(a,b)
        {return a - b;}
    );
    nums2 = nums2.sort
    (
        function(a,b)
        {return a - b;}
    );
    //对两个数组去重
    loop(nums1.length-1,nums1)
    loop(nums2.length-1,nums2)
    console.log(nums1,nums2)
    var l1 = nums1.length;
    var l2 = nums2.length;
    var re = [];
    var renum=0;
    var i = 0,j=0;
    //console.log(i,j)
    for(var i =0,j=0;i<l1&&j<l2;)
        {
            //console.log(i,j)
            if(nums1[i]==nums2[j])
            {
             re[renum] = nums1[i];
                renum++;
             i++;
             j++;
            }
            if(nums1[i]>nums2[j])
            {j++}
            else if(nums1[i]<nums2[j])
            {i++}
        }
    return re;
};
