/**
 * @param {string} str
 * @returns {string}
 */
 //104ms 已经战胜 22.08 % 的 javascript 提交记录
var reverseWords = function(str) {
  //去除前后空格
    str=str.replace(/(^\s+)|(\s+$)/g,"");//去掉前后空格
    let l = str.length;
    let re =[];
    let rnum = 0;
    let t= 0 ;
    console.log(str,re,l)
    for(let i = 0;i<l;i++)
    {
      if(str[i]==' ')
      {
        if(str[i+1]!==' ')
        {
        let temp = str.slice(t,i);
        console.log(temp,t,i,str)
        temp = temp.replace(/(^\s+)|(\s+$)/g,"")
        re[rnum]=temp
        t=i;
        rnum++;
        }
      }
    }
    re[rnum]=str.slice(t,l).replace(/(^\s+)|(\s+$)/g,"");
    return re.reverse().join(' ')
};
console.log(reverseWords("   the   sky  is      blue  hey  "));
console.log(reverseWords("   the   sky  is  blue  hey    "));
