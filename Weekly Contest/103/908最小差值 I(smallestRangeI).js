/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
    var l = A.length;
    var B ;
    var manum=-20000 ,minum=20000;
    for(var i=0;i<l;i++)
    {
      if(A[i]>manum){manum=A[i]}
      if(A[i]<minum){minum=A[i]}
    }
    var temp = manum-minum;
    if(temp<=2*K&&temp>=-2*K)
    {return 0}
    else if (temp>2*K) {
      return temp-2*K;
    }
    else {return temp+2*K}
};
