/**
 * @param {string} s
 * @return {string}
 */
 //暴力法 time limited
var longestPalindrome = function(s) {
    let temp = [];
    let maxtemp;
    if(s.length==0)
        {
            maxtemp='';
        }
    else
        {
            maxtemp = s[0];
        }
    let len = 1;
    let l = s.length;
    let s1 = s.split('').reverse().join('');
    console.log(s,s1)
    for(let i = 0;i<l;i++)
        {
            for(let j = 0;j<l;j++)
                {
                    //寻找最大共同子串
                    if(s[i]==s1[j])
                        {
                            len=0;
                            for(let k = 0;k+j<l;k++,len++)
                                {
                                    if(s[i+k]==s1[j+k])
                                        {
                                            temp[len]=s[i+k];
                                        }
                                    else
                                        {break;}
                                }
                           // console.log(temp,maxtemp)
                            //判断是否回文
                            for(let q=0,w=temp.length-1;q<w;q++,w--)
                                {
                                    if(temp[q]!=temp[w])
                                        {temp=[];break;}
                                }
                            if(temp.length>maxtemp.length)
                                {maxtemp = temp.join('');}
                            temp=[];
                        }
                }
        }
    return maxtemp
}
/*
* 中心扩展
* 148 ms	17.7 MB
* 的提交执行用时已经战胜 72.53 % 的 javascript 提交记录
*/
var longestPalindrome = function(s) {
    if(s==null&&s=="")
        {return ""}
    let l = s.length;
    let left,right;
    let ret='';
    let temp = '';
    for(let i = 0;i<l;i++)
        {
            left=i,right=i;
         //   console.log(s[left],s[right])
            temp = expansion(s,left,right);
            if(temp.length>ret.length)
                {
                    ret = temp;
                }
         //   console.log(ret,temp)
            temp = expansion(s,left,right+1);
            if(temp.length>ret.length)
                {
                    ret = temp;
                }
          //  console.log(ret,temp)
        }
    return ret
}
var expansion = function(s,left,right)
{
    while(left>=0&&right<s.length&&s[left]==s[right])
        {
            left--;
            right++;
        }
    let ret = s.substring(left+1,right) //截取范围为 [left,right) 包括起点不包括终点
   // let ret = s.slice(left-1,right) //截取错误 (start,end]不包括起点，包括终点
  //  console.log(ret)
    return ret;
}
