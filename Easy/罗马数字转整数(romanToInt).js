/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var I = 1, V =5,X =10 ,L =50,C =100,D =500,M =1000;
    var A =4;
    var B =9 , E=40 , F =90, G=400,H=900;
    //I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
    //X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
    //C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
    console.log(l);
    s = s.replace(/IV/,"A");
    s = s.replace(/IX/,"B");
    s = s.replace(/XL/,"E");
    s = s.replace(/XC/,"F");
    s = s.replace(/CD/,"G");
    s = s.replace(/CM/,"H");
    console.log(s);
    var num =0;
    var l = s.length;//替换后的数组长度
    console.log(l);
    for(var i=0;i<l;i++){
      if(s[i]=="I") {num = num+1;}
      else if (s[i]=="V") {num += 5;}
      else if (s[i]=="X") {  num += 10;}
      else if (s[i]=="L") {  num += 50;}
      else if (s[i]=="C") {  num += 100;}
      else if (s[i]=="D") {  num += 500;}
      else if (s[i]=="M") {num += 1000;}
      else if (s[i]=="A") { num += 4;}
      else if (s[i]=="B") {num += 9;}
      else if (s[i]=="E") {num += 40;}
      else if (s[i]=="F") {num += 90;}
      else if (s[i]=="G") {num += 400;}
      else if (s[i]=="H") {num += 900;}
          console.log(s[i]);
    }
return num;
};
console.log(romanToInt("LVIII"));
