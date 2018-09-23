/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 //第一种是遍历两个数组排序
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1[0]>nums2[0]||nums2.length==0)
    {
      var nums4 = nums1.slice(0);
      nums1 = nums2.slice(0);
      nums2 = nums4.slice(0);
    }
    var l1 = nums1.length;
    var l2 = nums2.length;
    var nums3 =[];
    //if(nums1[0]<nums2[0]){nums3[0]=nums1[0]}
    //else{nums3[0]=nums2[0]}
    var j=0,k=0;
    for(var i=0;i<l1+l2;i++)//num3的下标
    {
      if(nums1[j]<=nums2[k]||k>l2-1)
      {
        nums3[i]=nums1[j];
        console.log(nums1[j],j,nums3,"j");
        j++;
      }
      else
      {
        nums3[i]=nums2[k];
        console.log(nums2[k],k,nums3,"k");
        k++;
      }
    }
    console.log(nums3);
    var l = nums3.length;
    if(l%2==1)
    {console.log(nums3[(l-1)/2]);
    return nums3[(l-1)/2];}
    else
    {console.log((nums3[l/2-1]+nums3[l/2])/2);
    return (nums3[l/2-1]+nums3[l/2])/2}

};
//console.log(findMedianSortedArrays([1,2],[0]));
console.log(findMedianSortedArrays([2],[1,3,4]));


//第二种是二分法
/*
var findMedianSortedArrays = function(nums1, nums2) {
    var total = nums1.length + nums2.length;

    if (total % 2 === 1) {
        return findKth(nums1, 0, nums2, 0, parseInt(total/2) + 1);
    } else {
        return (
            findKth(nums1, 0, nums2, 0, parseInt(total/2))
            + findKth(nums1, 0, nums2, 0, parseInt(total/2) + 1)
        )/2;
    }
};

function findKth(nums1, start1, nums2, start2, kth) {
    var len1 = nums1.length - start1;
    var len2 = nums2.length - start2;

    if (len1 > len2) {
        return findKth(nums2, start2, nums1, start1, kth);
    }

    if (len1 === 0) {
        return nums2[kth - 1];
    }

    if (kth === 1) {
        return Math.min(nums1[start1], nums2[start2]);
    }

    // divide kth into 2 parts
    var part1 = Math.min(parseInt(kth/2), len1);
    var part2 = kth - part1;

    if (nums1[start1 + part1 - 1] < nums2[start2 + part2 - 1]) {
        return findKth(nums1, start1 + part1, nums2, start2, kth - part1);
    } else if (nums1[start1 + part1 - 1] > nums2[start2 + part2 - 1]) {
        return findKth(nums1, start1, nums2, start2 + part2, kth - part2);
    } else {
        return nums1[start1 + part1 - 1];
    }
}
*/
