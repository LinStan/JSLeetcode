/**
 * @param {number} c
 * @return {boolean}
 */
var mySqrt = function(x) {
   if(x<0){return x}
   var re = 0;
   do{
     re = re+1;}
   while(re*re<=x);
   return re-1;
 };
var judgeSquareSum = function(c) {
    var a,b;
    if(c<0){return false}
    if(c==0){return true}
    b = mySqrt(c);
    for(a=0;a<b;)
    {
      if(a*a+b*b<c)
      {
        a++;
      }
      if(a*a+b*b>c)
      {b--;}
      if(a*a+b*b==c){return true}
    }
    return false
};
console.log(judgeSquareSum(2147483645));
