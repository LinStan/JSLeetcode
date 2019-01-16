 // 已经战胜 14.73 % 的 javascript 提交记录
 /**
  * @param {string[]} strs
  * @return {string}
  */
 var longestCommonPrefix = function(strs) {
     var l = strs.length;
     if(l==0){return ""}
     if(strs[0]==""){return ""}
     var temp = strs[0];
   //  console.log(temp)
     var templ = temp.length;
     var re = "";
     for(var i = 0;i<templ;i++)
         {
             for(var j = 0;j<l;j++)
                 {
                     if(strs[j][i]!=temp[i])
                         {return re;}
                 }
             re=re+temp[i]
         }
     return re;
 };
