/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  //给定一个 32 位有符号整数，将整数中的数字进行反转。其数值范围是 [−2^31,  2^31 − 1]
    var rev = 0;
    var pop;
    //判断正负
    if (x>0)
    {x = x;
    var flag =1;}
    else
    {x = -x;}
    while(x != 0){
      pop = x%10;
      x = Math.floor(x/10);//整除向下取整
      //未详细考虑溢出问题
      if (rev > Math.floor((Math.pow(2, 31) - 1)/10)){return 0}
      //if (rev < -Math.pow(2, 31)/10){return 0}
      rev = rev*10+pop;
    }
    if(flag ==1)
    return rev;
    else
    return -rev;
};
console.log(reverse(-123));
