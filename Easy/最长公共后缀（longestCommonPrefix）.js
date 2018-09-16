/**
 * @param {string[]} strs
 * @return {string}
 * 共同前缀，因此通过第一个字符串来进行匹配
 * 考虑[]和[""]的情况
 */
var longestCommonPrefix = function(strs)
{
    var l = strs.length;//获取数组元素
    //console.log(l);
    if(l!=0)//判断空数组
    {
    var str0 = strs[0];
    if(str0 !="")//判断数组空元素
    {
    var l1 = str0.length;//获取第一个元素长度
    var ret = str0[0];
    for(var i=0;i<l1;i++)
    {
      var temp = str0[i];
      var ret = str0.substr(0,i);
      //console.log(temp);
      for(var j=1;j<l;j++)
      {
        //console.log(strs[j][i]);
        if(strs[j][i]!=temp){var flag =1;return ret}
      }
      if(i==l1-1 && flag!=1)//判断第一个元素为共同前缀
      {ret = str0;}
    }
    return ret;
    }
    else return "";
  }
    else return "";
};
//console.log(longestCommonPrefix(["flower","flow","flight"]));
