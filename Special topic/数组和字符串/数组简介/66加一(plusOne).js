/**
 * @param {number[]} digits
 * @return {number[]}
 */
 //战胜37.30%
 /*
 //数组长度超过16就无法计算
 var plusOne = function(digits) {
     var l = digits.length;
     digits[l-1]+=1;
     var temp = 0;
     for(var i=l-1;i>=0;i--)
         {
             digits[i]+=temp;
             if(digits[i]>=10)
                 {
                     digits[i]=digits[i]-10;
                     temp=1;
                 }
             else
                 {
                     temp=0;
                 }
         }
     if(temp == 1)
         {
             return [1].concat(digits);
         }
     else
         {
             return digits
         }
 };
};*/

var plusOne = function(digits) {
   var temp;
   var l =digits.length;
   var flag=0;
   digits[l-1]=digits[l-1]+1;
   //console.log(digits);
   for(var i=0;i<l-1;i++)
   {
     if(digits[l-i-1]==10)
     {digits[l-i-1]=0;flag=1;
      }
      else{flag=0;}
      digits[l-2-i]=digits[l-2-i]+flag;
   }
   if(i >= l-1&&digits[0]==10)//>=是 为了防止输入为9
   {
     digits[0]=0;
     temp = digits.slice(0);
     temp.unshift(1);
     return temp;
   }
   else
   {return digits;}
};
console.log(plusOne([9]));
//console.log(plusOne([6,1,4,5,3,9,0,1,9]));
