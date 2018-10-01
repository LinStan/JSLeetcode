/**
 * @param {number} n
 * @return {number}
 */
 //找规律
var climbStairs = function(n) {
  var re = [];
  if(n==1){return 1}
  re[0]=2,re[1]=3,re[2]=5;
  for(var i = 2;i<n;i++)
  {
    //console.log(re[i-1],re[i-2],re);
    re[i] = re[i-1]+re[i-2];
  }
  return re[n-2];
};
console.log(climbStairs(100));
