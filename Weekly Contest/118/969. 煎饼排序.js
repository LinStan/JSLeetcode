/**
 * @param {number[]} A
 * @return {number[]}
 */
var findmaxlag = function(A,index)
{
    var max = A[0];
    var maxindex = 0;
    for(var i = 0;i<index;i++)
        {
            if(A[i]>max)
                {max = A[i];maxindex = i}
        }
    return maxindex;
}
var flip = function(A,index)
{
    //var newstack = A[:(index+1)]
    var newstack = A.slice(0,(index+1));
    newstack.reverse();
   // console.log(newstack,A)
    //newstack+=A[(index+1):]
    newstack = newstack.concat(A.slice(index+1));
   // console.log(newstack,A)
    return newstack;
}
var pancakeSort = function(A) {
    var l = A.length;//元素个数
    var maxindex = 0;
    var re = [];
    var renum = 0;
    for(var i = l;i>0;i--)
        {
            maxindex = findmaxlag(A,i);
            //console.log(maxindex)
            A = flip(A,maxindex)
            re[renum]=maxindex+1;
            renum++;
           // console.log(A,maxindex,i)
            A = flip(A,i-1)
            re[renum]=i;
            renum++;
            //console.log(A,maxindex,i)
           // console.log(A);
        }
    console.log(A)
    return re
};
