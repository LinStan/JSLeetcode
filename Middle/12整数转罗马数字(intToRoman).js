/**
 * @param {number} num
 * @return {string}
 */
var Roman = function(temp,Z)
{
  var s =[];
  if(temp!=0)
  {
    for(var i=0;i<temp;i++)
    {
      s[i]=Z;
    }
  }
  return s;
}
var intToRoman = function(num) {
    if(num>3999)
    {num = num %1000}
    //I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
    //X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
    //C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
    var s =[];
      var temp = parseInt(num/1000)
      num = num%1000;
      s = s.concat(Roman(temp,'M'));
      temp = parseInt(num/900)
      num = num%900;
      s = s.concat(Roman(temp,'CM'));
      temp = parseInt(num/500)
      num = num%500;
      s = s.concat(Roman(temp,'D'));
      temp = parseInt(num/400)
      num = num%400;
      s = s.concat(Roman(temp,'CD'));
      temp = parseInt(num/100)
      num = num%100;
      s = s.concat(Roman(temp,'C'));
      temp = parseInt(num/90)
      num = num%90;
      s = s.concat(Roman(temp,'XC'));
      temp = parseInt(num/50)
      num = num%50;
      s = s.concat(Roman(temp,'L'));
      temp = parseInt(num/40)
      num = num%40;
      s = s.concat(Roman(temp,'XL'));
      temp = parseInt(num/10)
      num = num%10;
      s = s.concat(Roman(temp,'X'));
      temp = parseInt(num/9)
      num = num%9;
      s = s.concat(Roman(temp,'IX'));
      temp = parseInt(num/5)
      num = num%5;
      s = s.concat(Roman(temp,'V'));
      temp = parseInt(num/4)
      num = num%4;
      s = s.concat(Roman(temp,'IV'));
      temp = parseInt(num/1)
      num = num%1;
      s = s.concat(Roman(temp,'I'));
    return s.join("");
};
console.log(intToRoman("3965"));
