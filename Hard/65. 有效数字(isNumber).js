/**
 * @param {string} s
 * @return {boolean}
 */
/*
var isNumber = function(s) {
    return !!s.match(/^\s*[+-]?(\d+\.\d+|\d+\.|\.\d+|\d+)(\e[+-]?\d+)?\s*$/);
};
*/
var finde = function(s,t)
{
  var dist;
  var k=0;
  var l =s.length;
  for(var i =0;i<l;)
  {
    if (s[i]==t) {
      dist = i;
      k++;
      i++;
    }
    i++;
    if(k>=2){return false}
  }
  return dist;
}
var isNumber = function(s) {
    //去除空格
    s = s.trim()
    console.log(s);
    //按照e为分界点分为两个字符串
    if(finde(s,'e')==false)
    {
      return false
    }
    else
    {
      var s1 = s.slice(0,finde(s,'e'));
      var s2 = s.slice(finde(s,'e')+1);
    }
    if (s2.indexOf('.')!==-1) {
      return false
    }
    //console.log(s1,s2);
    //去除+-号
    for(var i=0;i<s1.length;)
    {
      if(s1[i]==='-'||s1[i]==='+'){i++;}
      break;
    }
    s1 = s1.slice(i);
    for(var i=0;i<s2.length;)
    {
      if(s2[i]==='-'||s2[i]==='+'){i++;}
      break;
    }
    s2 = s2.slice(i);
    console.log(s1,s2);

};
//true
console.log(isNumber(" 0.1 "));
console.log(isNumber("0"));
console.log(isNumber("   +.0e-5  "));
console.log(isNumber("+.0e5"));
//false
console.log(isNumber("5/9"));
console.log(isNumber("5^9"));
console.log(isNumber("+.0e5e"));
console.log(isNumber("+5e5.3e6"));
