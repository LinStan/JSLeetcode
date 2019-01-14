/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    A=A.sort(function(a,b){return a-b;});
  //  console.log(A)
    var l = A.length;
    var max=0;
    for(var k = l-1;k>1;k--)
   // for(var i = 0;i<l-2;i++)
        {
            for(var j = k-1;j>0;j--)
           // for(var j = i+1;j<l-1;j++)
                {
                    for(var i = 0;i<j;i++)
                  //  for(var k = l-1;k>j;k--)
                        {
                            if(A[i]+A[j]>A[k])
                                {
                                    let temp = A[i]+A[j]+A[k];
                                    if(temp>max){max=temp;}
                                }
                            else
                                {if(max!=0){return max}}
                        }
                }
        }
    return max;
};
