/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    var la = A.length;
    var lb = B.length;
    var re =[];
    var temp=0;
    while(la>0&&lb>0)
    {
      temp+=A[la-1]-B[lb-1];
      la--;
      lb--;
      //console.log(temp,la,lb);
    }
    while(la){temp +=A[la-1];la--;}
    while(lb){temp -=B[lb-1];lb--;}
    //console.log(temp);
    //temp/2=target
    la = A.length;
    lb = B.length;
    for(var i =0;i<la;i++)
    {
      for(var j=0;j<lb;j++)
      {
        if(A[i]-B[j]==temp/2){return [A[i],B[j]]}
        //if(A[i]-B[j]==-temp/2){return [A[i],B[j]]}
      }
    }

};
//console.log(fairCandySwap([1,2,5],[2,4]));
//console.log(fairCandySwap([2],[1,3]));
//console.log(fairCandySwap([1,2],[2,3]));
console.log(fairCandySwap([35,17,4,24,10],[63,21]));
