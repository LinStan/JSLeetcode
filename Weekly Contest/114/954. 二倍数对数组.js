/**
 * @param {number[]} A
 * @return {boolean}
 */
var canReorderDoubled = function(A) {
    var l = A.length;
    if(l==0){return true}
    A.sort(function(a,b){return a-b})
//    console.log(A)
    //按正负数分为两个数组
    for(var j = 0;j<l;j++)
        {
            if(A[0]>=0){
                var B=[];
                break;
            }
            if(A[l-1]<0)
                {
                    var B=A;
                    A=[];

                }
            if(A[j]>=0)
                {
                    var B=A.splice(0,j);
                    break;
                }
        }
 //   console.log(A,B)
    var la = A.length;
    var lb = B.length;
 //   console.log(la,lb)
    if(la%2==1||lb%2==1){return false}
    var rea = A;
    var reb = B;
  //  console.log(rea,reb)
    for(var i = 0;i<la;)
        {
            var temp = A.indexOf(2*A[i]);
      //      console.log(temp,A,2*A[i]);
            if(temp==-1)
                {return false}
            else
                {
                    rea.splice(temp,1);
                    rea.splice(0,1);
                }
            if(rea.length==0){break;}
        }
   // console.log(rea);
    for(var i = lb-1;i>0;)
        {
            var temp = reb.indexOf(2*reb[i]);
           // console.log(temp,reb,2*reb[i]);
            if(temp==-1)
                {return false}
            else
                {
                    reb.splice(i,1);
                    reb.splice(temp,1);
                    lb = reb.length;
                    i=lb-1;
                }
            if(reb.length==0){break;}
        }
    console.log(reb)
    if(rea.length==0&&reb.length==0){return true}
    else
        {return false}
};
