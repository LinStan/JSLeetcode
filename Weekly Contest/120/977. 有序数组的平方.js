/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    A = A.sort(function(a,b){a=Math.abs(a);b=Math.abs(b);return a-b})
   // console.log(A)
    for(var i = 0;i<A.length;i++)
        {
            A[i]=A[i]*A[i]*1;
        }
    return A
};
