/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if(num<=0)
  {return false}
    var temp = 0;
    for(;temp*temp<=num;temp++)
    {
      if(temp*temp==num)
      {
        return true;
      }
    }
    return false;
};
console.log(isPerfectSquare(-1));
