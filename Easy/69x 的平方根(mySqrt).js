/**
 * @param {number} x
 * @return {number}
 */
 /*
var mySqrt = function(x) {
  if(x<0){return x}
    var a = Math.sqrt(x);
    return Math.floor(a);
};
*/
var mySqrt = function(x) {
  if(x<0){return x}
  var re = 0;
  do{
    re = re+1;}
  while(re*re<=x);
  return re-1;
};

console.log(mySqrt(0));
