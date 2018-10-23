/**
 * @param {string} s
 * @return {boolean}
 */
 function checkRate(nubmer)
 {
      var re =  /^[0-9a-zA-Z]*$/g;  //判断字符串是否为数字和字母组合
     //判断正整数 /^[1-9]+[0-9]*]*$/
      if (!re.test(nubmer))
     {
         return false;
      }else{
     return true;
      }
 }
 var isPalindrome = function(s) {
     if(s==""){return true}
     s = s.toLowerCase();
     //console.log(s);
     var l = s.length;
     var i = 0;
     var j = l-1;
     for(;i<j;)
         {
             //console.log(checkRate(s[i]),s[i],i)
             if(s[i]==" "||!checkRate(s[i]))
                 {
                     i++;
                     continue;
                 }
             //console.log(checkRate(s[j]),s[j],j)
             if(s[j]==" "||!checkRate(s[j]))
                 {
                     j--;
                     continue;
                 }
             if(s[i]!=s[j])
                 {
                     return false;
                 }
                 i++;j--;
         }
     return true;
 };
console.log(isPalindrome("A ma*/*-n, a plan, a canal: Panama"))
