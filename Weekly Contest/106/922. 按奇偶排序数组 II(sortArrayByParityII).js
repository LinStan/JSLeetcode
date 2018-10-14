/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    var l = A.length;
    var ji = [];
    var ou = [];
    var jinum=0;
    var ounum=0;
    for(var i = 0;i<l;i++)
    {
      if(A[i]%2==0)
      {
        ou[ounum]=A[i];
        ounum++;
      }
      else
      {
        ji[jinum]=A[i];
        jinum++;
      }
    }
    var j =0;
    for(i = 0;i<l;i++)
    {
      if(i%2==0)
      {
        A[i]=ou[j]
      }
      else if(i%2!=0)
      {
        A[i]=ji[j]
        j++;
      }
    }
    return A;
};
console.log(sortArrayByParityII([]));
