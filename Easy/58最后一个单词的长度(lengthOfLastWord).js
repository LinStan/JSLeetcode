/**
给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
如果不存在最后一个单词，请返回 0 。
说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var sum = 0;
    for(var i = 0;i<s.length;i++)
    {
      if(s[i] == " ")
      {
        for(var j=i;j<s.length;j++)//判断空格后有单词
        {
          if(s[j]!=" ")
          {sum=0}
        }
      }
      else{sum +=1;}
    }
    return sum;
};
console.log(lengthOfLastWord("hellow  ss    d "));
