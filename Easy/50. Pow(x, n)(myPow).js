/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

 var myPow = function(x, n) {
     if(n<0)   {
         return 1/myPow(x,-n);
     }
     if(n==0) {
         return 1;
     }
     if(n==1) {
         return x;
     }

     var re = myPow(x, parseInt(n/2));
     return re*re*myPow(x, n%2);
 };
 console.log(myPow(2.0,6));
