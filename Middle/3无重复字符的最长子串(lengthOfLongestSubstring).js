/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var l = s.length;
    var temp = [];
    var k = 0;
    var re=[];
    if(l==1){return 1}
    for(var i = 0;i<s.length;i++)
    {
      for(var j = 0;j<temp.length;j++)
      {
        //console.log(j,temp,temp.length);
        if(s[i]==temp[j]){
          //console.log(i,j);
          if(temp.length>re.length)
          {re = temp.slice(0)}
          //保留相同字符后的元素
          temp = temp.slice(j+1);
        }
      }
      //console.log(temp.length,temp);
        temp[temp.length]=s[i];
      //console.log(temp.length,temp);

    }
    //防止最后一个字符不同，temp未复制到re
    if(temp.length>re.length){return temp.length}
    else{return re.length}
};
//一些测试用例
//console.log(lengthOfLongestSubstring('abcabcbb'));
//console.log(lengthOfLongestSubstring('pwwkew'));
//console.log(lengthOfLongestSubstring('bbbbbb'));
//console.log(lengthOfLongestSubstring('b'));
//console.log(lengthOfLongestSubstring('dvdf'));
//console.log(lengthOfLongestSubstring('pwkewwertyu'));
