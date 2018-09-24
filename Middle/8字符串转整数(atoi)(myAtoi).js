/**
 * @param {string} str
 * @return {number}
 */
 /*
 //用自带函数修改后解决的
 var myAtoi = function(str) {
     var a = parseInt(str);
     if(isNaN(a)){return 0;}
     else if(a>2147483647)
         {return 2147483647}
     else if (a<-2147483648)
         {return -2147483648}
     else{
     return a;
   }
 };
*/
//自行实现
var calu = function(re,zf)
{
  var j;
  var l1 = re.length;
  //MAX=2147483647  MIn =-2147483648
  var sum =0;
  for(j=0;j<l1;j++)
  {
    sum = sum + re[j]*Math.pow(10,(l1-j-1));
    //console.log(sum);
  }
  if(zf==1)
  {
    if(sum>2147483648)
    {return -2147483648;}
    else
    {return -sum}
  }
  if (zf==0) {
    if(sum>2147483647)
    {return 2147483647}
    else
    {return sum}
  }
}
var myAtoi = function(str) {
  var l = str.length;
  var j=0;
  var re = [];
  var flag =0;
  var zf =0;
  var f=0;
  for(var i=0;i<l;i++)
  {
    var temp = str[i];
    switch(temp)
    {
      case ".":
        flag=1;
        if(flag==1&&re.length==0)
        {
          return 0;
        }
        else if(flag==1&&re.length!=0)
        {
          return calu(re,zf)}
        break;
      case "-":
        if(re.length!=0)
        {return calu(re,zf)}
        zf=1;
        f +=1;//表示负数
        if(f>=2)
        {return 0}
        break;
      case "+":
        if(re.length!=0)
        {return calu(re,zf)}
        f +=1;//表示负数
        if(f>=2)
        {return 0}
        break;
      case " ":
        if(re.length!=0||f!=0)
        {flag=1;}
        if(flag==1&&re.length==0)
        {
          return 0;
        }
        else if(flag==1&&re.length!=0)
        {
          return calu(re,zf)}
        break;
      case "0":
        re[j]=0;
        j++;
        break;
      case "1":
        re[j]=1;
        j++;
        break;
      case "2":
        re[j]=2;
        j++;
        break;
      case "3":
        re[j]=3;
        j++;
        break;
      case "4":
        re[j]=4;
        j++;
        break;
      case "5":
        re[j]=5;
        j++;
        break;
      case "6":
        re[j]=6;
        j++;
        break;
      case "7":
        re[j]=7;
        j++;
        break;
      case "8":
        re[j]=8;
        j++;
        break;
      case "9":
        re[j]=9;
        j++;
        break;
      default:
        flag=1;
        if(re.length!=0)
        {flag=1;}
        if(flag==1&&re.length==0)
        {
          return 0;
        }
        else if(flag==1&&re.length!=0)
        {
          return calu(re,zf)}
        break;
    }
  }
  return calu(re,zf);
};
console.log(myAtoi("-4147483643"));
console.log(myAtoi("  +-23 saf g4"));
console.log(myAtoi("  -0012a42"));
console.log(myAtoi("  0-1  234"));
console.log(myAtoi("  -56+"));
