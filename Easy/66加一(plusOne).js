/**
 * @param {number[]} digits
 * @return {number[]}
 */
 /*
 //数组长度超过16就无法计算
var plusOne = function(digits) {
    var temp=0;
    var re=[],sum=[];
    var l =digits.length;
    for(var i=0;i<digits.length;i++)
    {
      temp = temp + digits[i]*Math.pow(10,l-i-1);
      console.log(l,l-i,temp);
    }
    temp = temp+1;//+1后的数字
    var tl = temp.toString().length;
    for(var j=0;j<tl;j++)
    {
      sum[j] = temp % 10;
      temp = parseInt(temp/10);
    }
    for(i=0;i<tl;i++)
    {re[i]=sum[tl-i-1]}

    //console.log(temp,tl);
    return re;
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
