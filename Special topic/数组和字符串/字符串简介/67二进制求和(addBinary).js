/**
给定两个二进制字符串，返回他们的和（用二进制表示）。
输入为非空字符串且只包含数字 1 和 0。
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var la = a.length;
  var lb = b.length;
  var flag = 0;
  var sum =[];
  a = a.split("");
  b = b.split("");
  //补全到相同长度
  if(la<lb)
  {
    for(var i=0;i<lb-la;i++)
    {
      a.unshift('0');
    }
  }
  if(la>lb)
  {
    for(var i=0;i<la-lb;i++)
    {
      b.unshift('0');
    }
  }
  la = a.length;
  lb = b.length;
  console.log(a,b);
  var l = Math.max(la,lb);
  for(var i=0;i<l;i++)//四个条件判断
  {
    if((a[la-i-1]=="1"&&(b[lb-i-1]=="1")&&flag==0)
    ||(a[la-i-1]=="1"&&(b[lb-i-1]=="0")&&flag==1)
    ||(a[la-i-1]=="0"&&(b[lb-i-1]=="1")&&flag==1))
    {
      console.log(1);
      flag=1;sum[i]=0;
    }
    else if((a[la-i-1]=="0"&&b[lb-i-1]=="0"&&flag==0))
    {
      console.log(a[la-i-1],b[lb-i-1]);
      flag =0;sum[i]=0;
    }
    else if (a[la-i-1]=="1"&&b[lb-i-1]=="1"&&flag==1)
    {
      flag=1;sum[i]=1;
    }
    else
    {
      console.log(a[la-i-1],b[lb-i-1],la-i-1,lb-i-1);
      //console.log(3);
      flag=0;sum[i]=1;
    }
  }
  //console.log(i);
  sum.reverse();
  var temp =sum.slice(0);
  if(i>=(l-1)&&flag==1)
  {
    temp.unshift(1);
  }
  temp = temp.join("");
  return temp;
};
console.log(addBinary("110","0"));
console.log(addBinary("1","0"));
console.log(addBinary("100","110010"));
