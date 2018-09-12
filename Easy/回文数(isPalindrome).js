/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x<0) {return false}//x为负数肯定不是回文
    else {
      var nums = x.toString();
      var a = nums.length;
      console.log(a);
      for(var i=0;i<a/2;i++){
        if(nums[i]!= nums[a-i-1]){return false}
        console.log(nums[i],nums[a-i-1]);
      }
      return true;
    }
};
var x = 123;
var num = x.toString();
var a = num.length;
//console.log(x,num,a);
console.log(isPalindrome(12321));
//console.log("%d",a);
