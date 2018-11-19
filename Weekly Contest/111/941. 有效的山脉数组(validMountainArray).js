/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    var l = A.length;
    if(l<3){return false}
    var temp = A[0];
    var temp =A.indexOf(Math.max.apply(Math, A))
    //console.log(temp)
    if(temp==0||temp==l-1){return false}
    var a = A.slice(0,temp);
    var b = A.slice(temp+1,l);
    //console.log(a,b)
    if(a.length==1){if(a[0]>=A[temp]){return false}}
    if(b.length==1){if(b[0]>=A[temp]){return false}}
    for(var i=0;i<a.length-1;i++)
        {
            if(a[i]>=a[i+1]){return false}
        }
    for(i=0;i<b.length-1;i++)
        {
           // console.log(b[i],b[i+1])
            if(b[i]<=b[i+1]){return false}
        }
    return true
};
