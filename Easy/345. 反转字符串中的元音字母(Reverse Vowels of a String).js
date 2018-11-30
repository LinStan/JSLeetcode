/**
 * @param {string} s
 * @return {string}
 */
 //100 ms, 在Reverse Vowels of a String的JavaScript提交中击败了93.46% 的用户
var isyuan = function(s)
{
    //console.log(/[a,e,i,o,u]/i.test(s));
    //正则匹配是否是元音字母，带，会将，也匹配进去
    return /[aeiou]/i.test(s);
}
var reverseVowels = function(s) {
    var temp = s.split('');
    var l = s.length;
    var flagi=0,flagj=0;
    for(var i = 0,j=l-1;i<j;)
        {
            if(!isyuan(s[i]))
                {
                    i++;
                }
            else
                {flagi=1;}
            if(!isyuan(s[j]))
                {j--;}
            else
                {flagj=1;}
            if(flagi==1&&flagj==1)
                {
                    //console.log(temp[i],temp[j],temp)
                    var t = temp[i];
                    temp[i]=temp[j];
                    temp[j]=t;
                    //console.log(temp)
                    flagi=0;flagj=0;
                    i++;j--;
                }
        }
    return temp.join('');
};
