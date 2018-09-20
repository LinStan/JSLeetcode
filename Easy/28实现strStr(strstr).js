/**
输入: haystack = "hello", needle = "ll"
输出: 2
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle ==""){return 0}//needle=0,返回0,这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
    if(haystack =="" && needle!=""){return -1}
    if(haystack.length!=needle.length)
    {
    for(var i=0;i<(haystack.length-needle.length+1);i++)
    {
      //console.log(i);
      //console.log(haystack.length,needle.length);
      if(haystack[i]==needle[0])
      {
        for(var j=0;j<needle.length;j++)
        {
          //console.log(haystack[i+j],needle[j]);
          var flag=1;
          if(haystack[i+j]!=needle[j])
          {
            flag=0;
            break
          }
        }
        //console.log(flag);

        if(flag == 1){return i}
      }
    }
    return -1;
    }
    else//长度相同
    {
      for(var i =0;i<haystack.length;i++)
      {
        if(haystack[i]!=needle[i])
        {
          return -1
        }
      }
      return 0;
    }
};
//console.log(strStr("helollo","ll"));
//console.log(strStr("","ll"));
//console.log(strStr("",""));
console.log(strStr("gaaa","aaaa"));
